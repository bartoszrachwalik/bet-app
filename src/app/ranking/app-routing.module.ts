import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeComponent} from '../home/home.component';
import {MyBetsComponent} from '../my-bets/my-bets.component';
import {RankingComponent} from './ranking.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {SigninComponent} from '../auth/signin/signin.component';
import {SignupComponent} from '../auth/signup/signup.component';
import {ResultsComponent} from '../results/results.component';
import {MatchesListComponent} from '../matches-list/matches-list.component';
import {EventsComponent} from '../events/events.component';
import {MyBetsStartComponent} from '../my-bets-start/my-bets-start.component';
import {MatchesListStartComponent} from '../matches-list-start/matches-list-start.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'my-bets', component: MyBetsStartComponent, children: [
    {path: ':id', component: MyBetsComponent}
  ]
  },
  {path: 'ranking', component: RankingComponent},
  {path: 'results', component: ResultsComponent},
  {
    path: 'matches-list', component: MatchesListStartComponent, children: [
    {path: ':id', component: MatchesListComponent}
  ]
  },
  {path: 'events', component: EventsComponent},
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
