import { DigimonsRoutingModule } from "./digimons-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DigimonsGalleryComponent } from "./components/digimons-gallery/digimons-gallery.component";
import { DigimonsTableComponent } from "./components/digimons-table/digimons-table.component";
import { DigimonsTableBasicComponent } from "./components/digimons-table-basic/digimons-table-basic.component";
import { DigimonDetailComponent } from "./pages/digimon-detail/digimon-detail.component";
import { DigimonsComponent } from "./digimons.component";
import { DigimonAddComponent } from "./pages/digimon-add/digimon-add.component";
import { UpperPipe } from "../../shared/pipes/upper.pipe";

@NgModule({
  declarations: [
    DigimonsComponent,
    DigimonsGalleryComponent,
    DigimonsTableComponent,
    DigimonsTableBasicComponent,
    DigimonDetailComponent,
    DigimonAddComponent,
    UpperPipe
  ],
  imports: [
    CommonModule,
    DigimonsRoutingModule
  ]
})
export class DigimonsModule {}
