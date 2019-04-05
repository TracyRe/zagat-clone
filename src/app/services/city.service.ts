import { Injectable } from '@angular/core';
import { City } from '../models/city.model';

@Injectable()
export class CityService {

  constructor() { }

  getCitys() {
    return CITY;
  }

}
