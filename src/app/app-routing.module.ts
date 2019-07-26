import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import {FirstPageComponent} from './first-page/first-page.component';
import {OneHomeComponent} from './one-home/one-home.component';

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: ':id/:type', component: OneHomeComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
