import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BestComponent } from './best/best.component';
import { LatestComponent } from './latest/latest.component';
import { AboutComponent } from './about/about.component';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { CityComponent } from './city/city.component';

export const firebaseConfig ={
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

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
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
