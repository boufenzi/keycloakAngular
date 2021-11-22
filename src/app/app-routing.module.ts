import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './services/guard/auth.guard';


const routes: Routes = [
  {
    path: 'racine',
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
    loadChildren: () => import('./modules/racine/racine.module')
      .then(m => m.RacineModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./modules/error/error.module')
      .then(m => m.ErrorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
