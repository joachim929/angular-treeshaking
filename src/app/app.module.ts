import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstModule} from './first/first.module';
import {SecondModule} from './second/second.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ThirdModule} from './third/third.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    FirstModule,
    SecondModule,
    ThirdModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
