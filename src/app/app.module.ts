import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonsComponent } from './pages/digimons/digimons.component';
import { HttpClientModule } from "@angular/common/http";
import { DigimonsListComponent } from './pages/digimons/components/digimons-list/digimons-list.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { DigimonsTableComponent } from './pages/digimons/components/digimons-table/digimons-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonsComponent,
    DigimonsListComponent,
    DigimonsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
