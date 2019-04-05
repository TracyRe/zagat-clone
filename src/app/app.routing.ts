import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';


const appRoutes: Routes = [
  {
    path: '',
    component: CityComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
