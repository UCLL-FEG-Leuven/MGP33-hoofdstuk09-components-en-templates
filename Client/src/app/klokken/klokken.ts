import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Klok } from '../klok/klok';

@Component({
    selector: 'app-klokken',
    imports: [FormsModule, Klok],
    templateUrl: './klokken.html',
    styleUrl: './klokken.css'
})
export class Klokken {
  newTimeZone: string = 'Europe/Brussels';
  timeZones: Array<string> = [];

  addNewTimeZone() {
    this.timeZones.push(this.newTimeZone);
    this.newTimeZone = "";
  }
}