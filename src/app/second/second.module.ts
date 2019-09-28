import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecondRoutingModule} from './second-routing.module';
import {SecondComponent} from './second/second.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AnotherComponent} from './another/another.component';
import {LandingComponent} from './landing.component';
import {SecondServiceModule} from './second-service.module';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule,
    ReactiveFormsModule,
    SecondServiceModule
  ],
  declarations: [
    AnotherComponent,
    LandingComponent,
    SecondComponent
  ]
})
export class SecondModule {
}
