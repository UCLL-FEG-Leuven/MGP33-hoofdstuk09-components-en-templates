import { Component, Input, OnDestroy, OnInit, Output, Signal, signal } from '@angular/core';

@Component({
    selector: 'app-klok',
    imports: [],
    templateUrl: './klok.component.html',
    styleUrl: './klok.component.css'
})
export class KlokComponent implements OnInit, OnDestroy {
  @Input()
  timeZone: string  = "Europe/Brussels";

  locale = signal("nl-BE");
  tijd = signal("");
  isNight = signal(false);

  intervalId: number | undefined;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      const huidigTijdstip = new Date();
      this.tijd.set(huidigTijdstip.toLocaleString(this.locale(), { timeZone: this.timeZone }));

      const hourIn24FormatInTimeZone = parseInt(
          huidigTijdstip.toLocaleTimeString(
            'nl-BE', 
            { hour: '2-digit', hour12: false, timeZone: this.timeZone})
        );
      this.isNight.set(hourIn24FormatInTimeZone >= 18 || hourIn24FormatInTimeZone <= 6);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  changeLocale(locale:string) {
    this.locale.set(locale);
  }
}