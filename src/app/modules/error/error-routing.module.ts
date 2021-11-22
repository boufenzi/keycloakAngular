import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterdictionComponent} from './interdiction/interdiction.component';


const routes: Routes = [{
  path: 'interdiction',
  component: InterdictionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
