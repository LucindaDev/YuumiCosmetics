import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(public router: Router) {}

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  shouldShowMenu(): boolean {
    const hiddenMenuRoutes = ['/administrador'];
    return !hiddenMenuRoutes.includes(this.router.url);
  }

}
