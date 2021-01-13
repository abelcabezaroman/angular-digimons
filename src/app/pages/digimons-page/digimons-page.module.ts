import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigimonsPageRoutingModule } from './digimons-page-routing.module';
import { DigimonsPageComponent } from './digimons-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DigimonsPageComponent, GalleryComponent],
  imports: [
    CommonModule,
    DigimonsPageRoutingModule,
    SharedModule
  ]
})
export class DigimonsPageModule { }
