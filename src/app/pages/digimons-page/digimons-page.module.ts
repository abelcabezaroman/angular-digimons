import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigimonsPageRoutingModule } from './digimons-page-routing.module';
import { DigimonsPageComponent } from './digimons-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddDigimonPageComponent } from './pages/add-digimon-page/add-digimon-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DigimonsPageComponent, GalleryComponent, AddDigimonPageComponent],
  imports: [
    CommonModule,
    DigimonsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DigimonsPageModule { }
