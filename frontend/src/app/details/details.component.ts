import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  safeImageUrl!: SafeUrl;
  currentIndex: number = 0;
  isRentable: boolean | undefined; 

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private sanitizer: DomSanitizer) {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
      this.updateImageUrl();
      this.getRentability(housingLocation?.rentability);
    });
  }

  ngOnInit(): void {
    // Your existing ngOnInit code to set this.housingLocation
    this.updateImageUrl(); // Ensure you call this to set the initial image
  }

  updateImageUrl(): void {
    if (this.housingLocation && this.housingLocation?.images?.image.length > 0) {
      const imageUrl = this.housingLocation.images.image[this.currentIndex]?.src?.__cdata?.trim() || '';
      this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    } else {
      console.error("No images found in housingLocation.");
    }
  }

  // Navigate to the next image
  nextImage(): void {
    if (this.housingLocation && this.housingLocation?.images?.image.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.housingLocation.images.image.length; // Wrap around
      this.updateImageUrl();
    }
  }

  // Navigate to the previous image
  previousImage(): void {
    if (this.housingLocation && this.housingLocation?.images?.image.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.housingLocation.images.image.length) % this.housingLocation.images.image.length; // Wrap around
      this.updateImageUrl();
    }
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  async getRentability(rentability: string | undefined) {
    if (!rentability) {
      console.log("!!!!!rentability is undefined");
        this.isRentable = false; // Or handle this case as needed
    }
    this.isRentable = (rentability?.toLowerCase() === '1');
  }
}
