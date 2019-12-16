import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ClimbingroutesComponent} from './climbingroutes/climbingroutes.component';

const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'routes', component: ClimbingroutesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true} // <-- debugging purposes only
    ),
  ]
})
export class RoutingController {
}
