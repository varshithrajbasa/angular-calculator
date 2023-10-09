import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { Calculator } from './components/calculator'; 
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, Calculator],
  template: `
    <app-calculator />
  `,
})
export class App {
 
}

bootstrapApplication(App);
