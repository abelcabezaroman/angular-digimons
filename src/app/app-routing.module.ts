import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonsComponent } from "./pages/digimons/digimons.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { DigimonDetailComponent } from "./pages/digimons/pages/digimon-detail/digimon-detail.component";
import { HomeComponent } from "./pages/home/home.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'digimons', component: DigimonsComponent
  }
  ,
  {
    path: 'digimons/:digimonName', component: DigimonDetailComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
