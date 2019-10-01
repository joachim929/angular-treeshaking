import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ThirdComponent} from '../third.component';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html'
})
export class SiblingComponent extends ThirdComponent implements OnInit {
  childFormControl: FormControl;

  constructor(
  ) {
    super();
  }

  ngOnInit() {
    this.childFormControl = new FormControl(this.parentValue);
    this.childFormControl.valueChanges.subscribe((nextValue) => {
      this.parentValue = nextValue;
    });
  }
}
