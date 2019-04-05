import { Component, OnInit } from '@angular/core';

import { CityService } from '../services/city.service';


@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.scss'],
  providers: [CityService]
})
export class BestComponent implements OnInit {
  citys: FirebaseListObservable<any[]>;

  constructor(
    private cityService: CityService
  ) { }

  ngOnInit() {
  }

}
