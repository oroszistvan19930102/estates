import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';  // Importing routes from app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Optimization
    provideRouter(routes),                                 // Router configuration
    provideClientHydration(),                              // For client hydration (SSR)
    provideHttpClient()                                    // HTTP client configuration
  ]
};
