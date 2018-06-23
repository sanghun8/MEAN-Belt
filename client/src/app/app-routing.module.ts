import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  // /authors
  {path: 'pets', component: PetsComponent},
  // /edit
  {path: 'pets/edit/:id', component: EditComponent},
  // /new
  {path: 'pets/new', component: NewComponent},
  // /details
  {path: 'pets/details/:id', component: DetailsComponent},
  // /root
  {path: '', pathMatch: 'full', redirectTo: '/pets' },
  // /wildcard
  {path: '**', redirectTo: '/pets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
