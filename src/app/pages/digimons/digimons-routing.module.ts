import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonsComponent } from "./digimons.component";
import { DigimonAddComponent } from "./pages/digimon-add/digimon-add.component";
import { DigimonDetailComponent } from "./pages/digimon-detail/digimon-detail.component";

const routes: Routes = [
  {
    path: '', component: DigimonsComponent
  },
  {
    path: 'add', component: DigimonAddComponent
  },
  {
    path: ':digimonName', component: DigimonDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigimonsRoutingModule {}
