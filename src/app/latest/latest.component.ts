import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { CityService } from '../services/city.service';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
  providers: [CityService]
})
export class LatestComponent implements OnInit {
  citys: FirebaseListObservable<any[]>;

  loadCity(clickedCity) {
    this.router.navigate(['citys', clickedCity.$key]);
  };

  constructor(
    private router: Router,
    private cityService: CityService
  ) { }

  ngOnInit() {
  }

}
