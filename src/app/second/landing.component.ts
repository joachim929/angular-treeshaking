import {Component, OnDestroy, OnInit} from '@angular/core';
import {SecondService} from './second.service';

/**
 * This is the 'root' component of the SecondModule, here you can reset all values with destroy as the services won't get destroyed
 */
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit, OnDestroy {

  constructor(private secondService: SecondService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.secondService.value = 4;
  }

}
