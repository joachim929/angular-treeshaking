import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {ChildComponent} from './child/child.component';
import {AnotherChildComponent} from './another-child/another-child.component';


const routes: Routes = [
  {path: '', redirectTo: 'child', pathMatch: 'full'},
  {
    path: '', component: FirstComponent, children: [
      {path: 'child', component: ChildComponent},
      {path: 'another-yet-another-child', component: AnotherChildComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule {
}
