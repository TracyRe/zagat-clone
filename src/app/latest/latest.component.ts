import { Component, OnInit } from '@angular/core';

import { CityService } from '../services/city.service';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
  providers: [CityService]
})
export class LatestComponent implements OnInit {

  constructor(
    private cityService: CityService
  ) { }

  ngOnInit() {
  }

}
