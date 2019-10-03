import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ThirdService} from '../third.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html'
})
export class SiblingComponent implements OnInit {
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
