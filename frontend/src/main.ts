import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Ensure correct import of appConfig

bootstrapApplication(AppComponent, appConfig) // Directly pass appConfig here
  .catch(err => console.error(err));
