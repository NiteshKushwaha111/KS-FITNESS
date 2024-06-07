import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { FeaturesComponent } from './modules/features/features.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PlanPricingComponent } from './modules/plan-pricing/plan-pricing.component';

// export const routes: Routes = [];
export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'features', component: FeaturesComponent},
    {path:'contact', component: ContactComponent},
    {path:'plan-pricing', component: PlanPricingComponent},
  ];