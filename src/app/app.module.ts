import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from './shared/components/button/button.component';
import { UpperPipe } from "./shared/pipes/upper.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UpperPipe,

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
