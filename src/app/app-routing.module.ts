import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'first', pathMatch: 'full'},
  {
    path: 'first',
    loadChildren: './first/first.module#FirstModule',
    data: {preload: false},
  },
  {
    path: 'landing',
    loadChildren: './second/second.module#SecondModule',
    data: {preload: false}
  },
  {path: '**', redirectTo: '/first'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
