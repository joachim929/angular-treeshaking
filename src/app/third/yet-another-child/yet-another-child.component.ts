import {Component, OnInit} from '@angular/core';
import {ThirdComponent} from '../third.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-yet-another-child-component',
  templateUrl: './yet-another-child.component.html',
})
export class YetAnotherChildComponent extends ThirdComponent implements OnInit {
  childFormControl: FormControl;

  constructor() {
    super();
  }

  ngOnInit() {
    this.childFormControl = new FormControl(this.parentValue);
    this.childFormControl.valueChanges.subscribe((nextValue) => {
      this.parentValue = nextValue;
    });
  }
}
