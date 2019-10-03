import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ThirdService} from '../third.service';

@Component({
  selector: 'app-yet-another-child-component',
  templateUrl: './yet-another-child.component.html',
})
export class YetAnotherChildComponent implements OnInit {
  thirdServiceStringValue: string;
  stringForControl: FormControl;

  constructor(
    private thirdService: ThirdService
  ) {
    this.thirdServiceStringValue = this.thirdService.someString;
  }

  get someString(): string {
    return this.thirdService.someString;
  }

  set someString(value: string) {
    this.thirdService.someString = value;
  }

  ngOnInit() {
    this.stringForControl = new FormControl(this.someString);
    this.stringForControl.valueChanges.subscribe((nextValue) => {
      this.someString = nextValue;
    });
  }
}
