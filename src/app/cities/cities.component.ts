import { Component, Input, OnInit } from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {


@Input() childCityList: City[];


  constructor() { }

  ngOnInit() {
  }

}
