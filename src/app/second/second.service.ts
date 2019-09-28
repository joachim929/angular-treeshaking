import {Injectable} from '@angular/core';
import {SecondServiceModule} from './second-service.module';

@Injectable({
  providedIn: SecondServiceModule
})
export class SecondService {
  value = 4;

  constructor() {
    console.log('SecondService');
  }
}
