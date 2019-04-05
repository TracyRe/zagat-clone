import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { CityService } from '../services/city.service';


@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.scss'],
  providers: [CityService]
})
export class BestComponent implements OnInit {
  citys: FirebaseListObservable<any[]>;
  cityId: string;
  cityToDisplay;

  loadCity(clickedCity) {
    this.router.navigate(['citys', clickedCity.$key]);
  };

  constructor(
    private router: Router,
    private cityService: CityService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cityId = urlParameters['id'];
    });
    this.cityToDisplay = this.cityService.getCityById(this.cityId);
  }

}
