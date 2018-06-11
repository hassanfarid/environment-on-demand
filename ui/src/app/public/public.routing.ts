import {Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';


export const PUBLIC_ROUTES: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: {title: 'Environment on Demand | Login'}
  },

];
