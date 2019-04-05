import { Component, OnInit } from '@angular/core';

import { CityService } from '../city.service';


@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.scss'],
  providers: [CityService]
})
export class BestComponent implements OnInit {

  constructor(
    private cityService: CityService
  ) { }

  ngOnInit() {
  }

}
