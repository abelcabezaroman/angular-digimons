import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'digimons', loadChildren: () => import('./pages/digimons/digimons.module').then(m => m.DigimonsModule)
  },
  {
    path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  }
];

// const routes: Routes = [
//   {
//     path: '', component: HomeComponent
//   },
//   {
//     path: 'digimons', component: DigimonsComponent
//   },
//   {
//     path: 'digimons/add', component: DigimonAddComponent
//   },
//   {
//     path: 'digimons/:digimonName', component: DigimonDetailComponent
//   },
//   {
//     path: 'contact', component: ContactComponent
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
