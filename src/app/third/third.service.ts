import { Injectable } from '@angular/core';
import {ThirdServiceModule} from './third-service.module';

@Injectable()
export class ThirdService {
  someString = 'Some text';

  constructor() { }
}
