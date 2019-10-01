import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FirstRoutingModule} from './first-routing.module';
import {FirstComponent} from './first/first.component';
import {ChildComponent} from './child/child.component';
import {AnotherChildComponent} from './another-child/another-child.component';


@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule
  ],
  declarations: [
    FirstComponent,
    ChildComponent,
    AnotherChildComponent,
  ]
})
export class FirstModule {
}
