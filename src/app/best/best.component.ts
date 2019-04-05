import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CityService } from '../services/city.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.scss'],
  providers: [CityService]
})
export class BestComponent implements OnInit {
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
