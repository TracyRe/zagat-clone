import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { City } from '../models/city.model';

@Injectable()
export class CityService {
  citys: FirebaseListObservable<any[]>;

  constructor(
    private database: AngularFireDatabase
  ) {
    this.citys = database.list('citys');
  }

  getCitys() {
    return this.citys;
  }

  getCityById(cityId: string){
    return this.database.object('citys/' + cityId);
  }

}
