import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,    

  ],
  imports: [

  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
