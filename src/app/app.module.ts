import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonsComponent } from './pages/digimons/digimons.component';
import { HttpClientModule } from "@angular/common/http";
import { DigimonsGalleryComponent } from './pages/digimons/components/digimons-gallery/digimons-gallery.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { DigimonsTableComponent } from './pages/digimons/components/digimons-table/digimons-table.component';
import { DigimonsTableBasicComponent } from './pages/digimons/components/digimons-table-basic/digimons-table-basic.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule } from "@angular/forms";
import { DigimonDetailComponent } from "./pages/digimons/pages/digimon-detail/digimon-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    DigimonsComponent,
    DigimonsGalleryComponent,
    DigimonsTableComponent,
    DigimonsTableBasicComponent,
    ButtonComponent,
    DigimonDetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
