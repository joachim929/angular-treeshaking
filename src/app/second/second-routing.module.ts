import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecondComponent} from './second/second.component';
import {AnotherComponent} from './another/another.component';
import {LandingComponent} from './landing.component';


const routes: Routes = [
  {
    path: '', component: LandingComponent, children: [
      {path: 'second', component: SecondComponent},
      {path: 'another', component: AnotherComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule {
}
