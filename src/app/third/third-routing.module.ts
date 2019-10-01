import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ThirdComponent} from './third.component';
import {YetAnotherChildComponent} from './yet-another-child/yet-another-child.component';
import {SiblingComponent} from './sibling/sibling.component';


const routes: Routes = [
  {
    path: '', component: ThirdComponent, children: [
      {path: 'yet-another-child', component: YetAnotherChildComponent},
      {path: 'sibling', component: SiblingComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdRoutingModule {
}
