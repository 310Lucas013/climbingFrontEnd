import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ClimbingroutesComponent} from './climbingroutes/climbingroutes.component';
import {CompetitionsComponent} from './competitions/competitions.component';
import {RegisterComponent} from './register/register.component';
import {CompetitionroutesComponent} from './competitionroutes/competitionroutes.component';

const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'routes', component: ClimbingroutesComponent},
  {path: 'competitions', component: CompetitionsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'competitionroute/:id', component: CompetitionroutesComponent},
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
