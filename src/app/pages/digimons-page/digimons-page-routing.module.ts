import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigimonsPageComponent } from './digimons-page.component';

const routes: Routes = [
  { path: '', component: DigimonsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigimonsPageRoutingModule { }
