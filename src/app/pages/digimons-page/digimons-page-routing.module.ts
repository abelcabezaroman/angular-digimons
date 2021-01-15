import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigimonsPageComponent } from './digimons-page.component';
import { AddDigimonPageComponent } from './pages/add-digimon-page/add-digimon-page.component';
import { DetailDigimonPageComponent } from './pages/detail-digimon-page/detail-digimon-page.component';

const routes: Routes = [
  { path: '', component: DigimonsPageComponent },
  { path: 'add', component: AddDigimonPageComponent },
  { path: ':nameDigimon', component: DetailDigimonPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigimonsPageRoutingModule { }
