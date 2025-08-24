import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {providers: [
  provideZonelessChangeDetection(),
  provideRouter(routes)
]})
.catch((err) => console.error(err));;