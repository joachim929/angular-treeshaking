import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  _parentValue = 'testing';

  parentFormControl: FormControl;

  constructor(
  ) {
  }

  ngOnInit() {
    this.parentFormControl = new FormControl(this.parentValue);
    this.parentFormControl.valueChanges.subscribe((nextValue) => {
      this.parentValue = nextValue;
    });
  }

  get parentValue(): string {
    return this._parentValue;
  }

  set parentValue(value: string) {
    this._parentValue = value;
  }
}
