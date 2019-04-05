import { Component, Input, OnInit } from '@angular/core';

import { City } from '../models/city.model';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  providers: [CityService]
})
export class CitiesComponent implements OnInit {


@Input() childCityList: City[];


  constructor(
    private cityService: CityService
  ) { }

  ngOnInit() {
  }

}
