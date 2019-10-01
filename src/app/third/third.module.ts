import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ThirdComponent} from './third.component';
import {ThirdRoutingModule} from './third-routing.module';
import {YetAnotherChildComponent} from './yet-another-child/yet-another-child.component';
import {SiblingComponent} from './sibling/sibling.component';


@NgModule({
  declarations: [
    ThirdComponent,
    YetAnotherChildComponent,
    SiblingComponent
  ],
  imports: [
    CommonModule,
    ThirdRoutingModule,
    ReactiveFormsModule
  ]
})
export class ThirdModule {
}
