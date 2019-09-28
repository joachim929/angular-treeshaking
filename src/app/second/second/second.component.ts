import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SecondService} from '../second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {

  secondServiceNumberValue: number;
  numberFormControl: FormControl;

  constructor(
    private secondService: SecondService
  ) {
    this.secondServiceNumberValue = this.secondService.value;
  }

  get value(): number {
    return this.secondService.value;
  }

  ngOnInit() {
    this.numberFormControl = new FormControl(this.secondService.value);
    this.numberFormControl.valueChanges.subscribe((nextValue) => {
      this.secondService.value = Number(nextValue);
    });
  }
}
