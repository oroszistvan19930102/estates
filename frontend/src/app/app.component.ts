import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Import RouterModule to handle routing
  template: `<router-outlet></router-outlet>`,  // Router outlet for displaying routed views
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // No additional logic here; just serves as a container for the routed views
}