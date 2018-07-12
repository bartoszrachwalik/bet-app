import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeComponent} from '../home/home.component';
import {MyBetsComponent} from '../my-bets/my-bets.component';
import {RankingComponent} from './ranking.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {SigninComponent} from '../auth/signin/signin.component';
import {SignupComponent} from '../auth/signup/signup.component';
import {ResultsComponent} from '../results/results.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'my-bets', component: MyBetsComponent},
  {path: 'ranking', component: RankingComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
