import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KlokComponent } from '../klok/klok.component';

@Component({
    selector: 'app-klokken',
    imports: [FormsModule, KlokComponent],
    templateUrl: './klokken.component.html',
    styleUrl: './klokken.component.css'
})
export class KlokkenComponent {
  newTimeZone: string = 'Europe/Brussels';
  timeZones: Array<string> = [];

  addNewTimeZone() {
    this.timeZones.push(this.newTimeZone);
    this.newTimeZone = "";
  }
}