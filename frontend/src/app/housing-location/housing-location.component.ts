import { Component, Input, OnInit,  inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  safeImageUrl!: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Assuming the first image is used
    const imageUrl = this.housingLocation?.images.image[0]?.src?.__cdata.trim();
    this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
