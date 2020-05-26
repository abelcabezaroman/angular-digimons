import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonsComponent } from "./pages/digimons/digimons.component";
import { DigimonDetailComponent } from "./pages/digimons/pages/digimon-detail/digimon-detail.component";
import { AddComponent } from "./pages/digimons/pages/add/add.component";


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'digimons', component: DigimonsComponent
  }
  , {
    path: 'digimons/add', component: AddComponent
  }
  ,
  {
    path: 'digimons/:digimonName', component: DigimonDetailComponent
  },
  {
    path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
