import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KlokComponent } from './klok/klok.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, KlokComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newTimeZone: string = 'Europe/Brussels';
  timeZones: Array<string> = [];

  addNewTimeZone() {
    this.timeZones.push(this.newTimeZone);
    this.newTimeZone = "";
  }
}

  // 'America/New_York', 'Europe/Brussels', 'Japan'