import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntitiesComponent } from './components/entities/entities.component';

const routes: Routes = [
  {
    path: 'entities',
    component: EntitiesComponent,
  },
  {
    path: '**',
    redirectTo: 'entities',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
