import { Component } from '@angular/core';
import { City } from './models/city.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Zagat';

  masterCityList: City[] = [
  new City (`Atlanta`),
  new City (`Austin`),
  new City (`Baltimore`),
  new City (`Boston`),
  new City (`Charleston`),
  new City (`Charlotte`),
  new City (`Chicago`),
  new City (`Cincinnati`),
  new City (`Cleveland`),
  new City (`Columbus`),
  new City (`Dallas`),
  new City (`Denver`),
  new City (`Detroit`),
  new City (`Houston`),
  new City (`Indianapolis`),
  new City (`Kansas City`),
  new City (`Las Vegas`),
  new City (`Los Angeles`),
  new City (`Miami`),
  new City (`Milwaukee`),
  new City (`Minneapolis`),
  new City (`Nashville`),
  new City (`New Orleans`),
  new City (`New York City`),
  new City (`Oakland/Berkeley`),
  new City (`Orlando`),
  new City (`Philadelphia`),
  new City (`Phoenix / Scottsdale`),
  new City (`Providence`),
  new City (`Salt Lake City`),
  new City (`San Antonio`),
  new City (`San Diego`),
  new City (`San Francisco`),
  new City (`Savannah`),
  new City (`St. Louis`),
  new City (`Washington, DC`)
  ]
  
}
