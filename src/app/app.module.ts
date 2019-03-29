import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BestComponent } from './best/best.component';
import { LatestComponent } from './latest/latest.component';
import { AboutComponent } from './about/about.component';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BestComponent,
    LatestComponent,
    AboutComponent,
    CitiesComponent,
    FooterComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
