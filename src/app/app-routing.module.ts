import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigimonsComponent } from "./pages/digimons/digimons.component";


const routes: Routes = [

  {
    path: '',  component: DigimonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
