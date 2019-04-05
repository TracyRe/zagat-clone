import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { City } from '../models/city.model';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  providers: [CityService]
})
export class CitiesComponent implements OnInit {
  citys: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private cityService: CityService
  ) { }

  ngOnInit() {
    this.citys = this.cityService.getCitys();
  }


  loadCity(clickedCity) {
    this.router.navigate(['citys', clickedCity.$key]);
  };

}
