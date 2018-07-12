import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {DataStorageService} from './shared/data-storage.service';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {RankingComponent} from './ranking/ranking.component';
import {MyBetsComponent} from './my-bets/my-bets.component';
import {AppRoutingModule} from './ranking/app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {BetComponent} from './my-bets/bet/bet.component';
import {ResultsComponent} from './results/results.component';

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
    BetComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
