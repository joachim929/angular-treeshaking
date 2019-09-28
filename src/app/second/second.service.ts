import {Injectable} from '@angular/core';
import {SecondServiceModule} from './second-service.module';

/**
 * This service is used to share data between SecondComponent and AnotherComponent
 */
@Injectable({
  providedIn: SecondServiceModule
})
export class SecondService {
  value = 4;

  constructor() {
  }
}
