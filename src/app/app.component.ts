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
  new City (`Boston`)
  ]
  //
  // masterCityList: City[] = [
  // `Atlanta`, `Austin`, `Baltimore`,  `Boston`
  // `Charleston`, `Charlotte`, `Chicago`, `Cincinnati`, `Cleveland`, `Columbus`, `Dallas`, `Denver`, `Detroit`, `Houston`, `Indianapolis`, `Kansas City`, `Las Vegas`, `Los Angeles`, `Miami`, `Milwaukee`, `Minneapolis`, `Nashville`, `New Orleans`, `New York City`, `Oakland/Berkeley`, `Orlando`, `Philadelphia`, `Phoenix / Scottsdale`, `Providence`, `Salt Lake City`, `San Antonio`, `San Diego`, `San Francisco`, `Savannah`, `St. Louis`, `Washington, DC`
  // ]
}
