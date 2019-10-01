import {Component, OnInit} from '@angular/core';
import {SecondService} from '../../second/second.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {

  constructor(
    private secondService: SecondService
  ) {
    console.warn(this.secondService.value, 'Can still access the secondService even though I am in a different module');
  }

  ngOnInit() {
  }
}
