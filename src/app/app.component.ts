import { Component } from '@angular/core';
import { ContainerModule } from './container/container.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContainerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reto-angular-1';

  constructor(public router: Router) {}

  shouldShowFooter(): boolean {

    const hiddenFooterRoutes = ['/administrador'];
    return !hiddenFooterRoutes.includes(this.router.url);
  }

}
