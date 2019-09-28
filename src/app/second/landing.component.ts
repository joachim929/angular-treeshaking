import {Component, OnDestroy, OnInit} from '@angular/core';
import {SecondService} from './second.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {

  constructor(private secondService: SecondService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.secondService.value = 4;
  }

}
