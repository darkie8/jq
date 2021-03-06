import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
// routing
import { RouterModule, Routes } from '@angular/router';

// http
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
// http loader spinner
import { NgHttpLoaderModule } from 'ng-http-loader';

// cookie service
import { CookieService } from 'ngx-cookie-service';

import { RegionsComponent } from './region-view/regions/regions.component';
import { RegionViewModule } from './region-view/region-view.module';
import { CountryViewModule } from './country-view/country-view.module';
import { SingleCountryViewModule } from './single-country-view/single-country-view.module';
import { CountryComponent } from './country-view/country/country.component';
import { SingleCountryComponent } from './single-country-view/single-country/single-country.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegionViewModule,
    HttpClientModule,
    NgHttpLoaderModule,
    CountryViewModule,
    SingleCountryViewModule,
    RouterModule.forRoot([{ path: 'regions', component: RegionsComponent, pathMatch: 'full' },
    { path: '', component: RegionsComponent },
    { path: '*', component: RegionsComponent },
    {path: ':object1/:object2', component: CountryComponent},
    {path: ':region/:country/:object1', component: SingleCountryComponent}], { useHash: true })
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
