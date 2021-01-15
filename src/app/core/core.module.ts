import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [MenuComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  exports: [MenuComponent, LoaderComponent]
})
export class CoreModule { }
