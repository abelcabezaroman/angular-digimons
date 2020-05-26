import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { CommonModule } from "@angular/common";
import { ContactRoutingModule } from "./contact-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactModule {}
