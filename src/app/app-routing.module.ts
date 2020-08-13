import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListePersonnesComponent} from './liste-personnes/liste-personnes.component';
import {DetailsPersonneComponent} from './details-personne/details-personne.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EditDepenseComponent} from './edit-depense/edit-depense.component';
import {CreateDepenseComponent} from './create-depense/create-depense.component';
import {DialogDepenseComponent} from './dialog-depense/dialog-depense.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'personnes', component: ListePersonnesComponent},
  // {path: 'edit', component : EditDepenseComponent},
  {path: 'edit/:id_p/:id_d', component: EditDepenseComponent},
  {path: 'create/:id_p', component: CreateDepenseComponent},
  {path: 'details/:id', component: DetailsPersonneComponent},
  {path: 'delete/:id_p/:id_d', component: DialogDepenseComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
