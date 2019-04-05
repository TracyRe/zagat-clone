import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BestComponent } from './best/best.component';
import { LatestComponent } from './latest/latest.component';
import { AboutComponent } from './about/about.component';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { CityComponent } from './city/city.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BestComponent,
    LatestComponent,
    AboutComponent,
    CitiesComponent,
    FooterComponent,
    SocialComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
