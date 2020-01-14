import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RoutingController} from './RoutingController';
import {MaterialModule} from './material-module';
import {environment} from '../environments/environment';
import * as firebase from 'firebase/app';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {enableProdMode} from '@angular/core';
import {AuthService} from './shared/serv/auth/auth.service';
import { ClimbingroutesComponent } from './climbingroutes/climbingroutes.component';
import {CommonModule} from '@angular/common';
import { CompetitionsComponent } from './competitions/competitions.component';
import { RegisterComponent } from './register/register.component';
import { CompetitionroutesComponent } from './competitionroutes/competitionroutes.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

enableProdMode();
firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageNotFoundComponent,
    NavigationComponent,
    LoginComponent,
    ClimbingroutesComponent,
    CompetitionsComponent,
    RegisterComponent,
    CompetitionroutesComponent,
    ScoreboardComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingController,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
