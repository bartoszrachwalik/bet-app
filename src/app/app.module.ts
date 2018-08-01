import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {DataStorageService} from './shared/data-storage.service';
import {AuthService} from './auth/auth.service';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {RankingComponent} from './ranking/ranking.component';
import {MyBetsComponent} from './my-bets/my-bets.component';
import {AppRoutingModule} from './ranking/app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ResultsComponent} from './results/results.component';
import {MatchesListComponent} from './matches-list/matches-list.component';
import {EventSelectComponent} from './event-select/event-select.component';
import {EventsComponent} from './events/events.component';
import { MyBetsStartComponent } from './my-bets-start/my-bets-start.component';
import { MatchesListStartComponent } from './matches-list-start/matches-list-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RankingComponent,
    MyBetsComponent,
    PageNotFoundComponent,
    SigninComponent,
    SignupComponent,
    ResultsComponent,
    MatchesListComponent,
    EventSelectComponent,
    EventsComponent,
    MyBetsStartComponent,
    MatchesListStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
