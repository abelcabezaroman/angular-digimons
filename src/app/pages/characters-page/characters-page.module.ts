import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersPageRoutingModule } from './characters-page-routing.module';
import { CharactersPageComponent } from './characters-page.component';
import { CharactersGalleryComponent } from './components/characters-gallery/characters-gallery.component';
import { CharactersCardComponent } from './components/characters-card/characters-card.component';


@NgModule({
  declarations: [CharactersPageComponent, CharactersGalleryComponent, CharactersCardComponent],
  imports: [
    CommonModule,
    CharactersPageRoutingModule
  ]
})
export class CharactersPageModule { }
