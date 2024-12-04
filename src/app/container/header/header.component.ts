import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [RouterLink]
})
export class HeaderComponent {
  currentDate!: string;
  
  constructor() {
    this.updateCurrentDate();
    setInterval(() => {
      this.updateCurrentDate();
    }, 1000);
  }

  updateCurrentDate() {
    this.currentDate = new Date().toLocaleString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    });
  }
}
