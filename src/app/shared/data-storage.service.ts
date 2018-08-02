import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BetModel} from '../my-bets/bet.model';
import {MatchModel} from './match.model';
import {EventModel} from './event.model';
import {UserModel} from './user.model';
import {environment} from '../../environments/environment';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient) {
  }

  updateBets(bets: BetModel[]) {
    return this.http.put(environment.betsUrl, bets);
  }

  getBets() {
    return this.http.get(environment.betsUrl);
  }

  updateMatches(matches: MatchModel[], i: number) {
    return this.http.put(environment.eventsUrl + i + '/matchList.json', matches);
  }

  getMatches(i: number) {
    return this.http.get(environment.eventsUrl + i + '/matchList.json');
  }

  updateEvents(events: EventModel[]) {
    return this.http.put(environment.eventsJsonUrl, events);
  }

  getEvents() {
    return this.http.get(environment.eventsJsonUrl);
  }

  updateUsers(users: UserModel[]) {
    return this.http.put(environment.usersUrl, users);
  }

  getUsers() {
    return this.http.get(environment.usersUrl);
  }
}
