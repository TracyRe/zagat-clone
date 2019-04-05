import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { CityService } from '../services/city.service';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
  providers: [CityService]
})
export class LatestComponent implements OnInit {
  citys: FirebaseListObservable<any[]>;
  cityId: string;
  cityToDisplay;


  constructor(
    private cityService: CityService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cityId = urlParameters['id'];
    });
    this.cityToDisplay = this.cityService.getCityById(this.cityId);
  }

}
