import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DigimonsComponent } from "./pages/digimons/digimons.component";
import { DigimonsGalleryComponent } from "./pages/digimons/components/digimons-gallery/digimons-gallery.component";
import { DigimonsTableComponent } from "./pages/digimons/components/digimons-table/digimons-table.component";
import { DigimonsTableBasicComponent } from "./pages/digimons/components/digimons-table-basic/digimons-table-basic.component";
import { DigimonDetailComponent } from "./pages/digimons/pages/digimon-detail/digimon-detail.component";
import { DigimonAddComponent } from "./pages/digimons/pages/digimon-add/digimon-add.component";
import { UpperPipe } from "./shared/pipes/upper.pipe";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    DigimonsComponent,
    DigimonsGalleryComponent,
    DigimonsTableComponent,
    DigimonsTableBasicComponent,
    DigimonDetailComponent,
    DigimonAddComponent,
    UpperPipe,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
