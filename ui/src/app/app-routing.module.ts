import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
