import {RouterModule, Routes} from '@angular/router';
import {PUBLIC_ROUTES} from './public/public.routing';
import {PublicComponent} from './public/public.component';

const AP_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    data: {title: 'Environment on Demand | Login'}
  },
  {
    path: '',
    component: PublicComponent,
    data: {title: 'Environment on Demand'},
    children: PUBLIC_ROUTES
  },
];

/*, {useHash: true}*/
export const AppRouting = RouterModule.forRoot(AP_ROUTES);
