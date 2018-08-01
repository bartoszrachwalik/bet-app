import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BetModel} from '../my-bets/bet.model';
import {MatchModel} from './match.model';
import {EventModel} from './event.model';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient) {
  }

  updateBets(bets: BetModel[]) {
    return this.http.put('https://bet-app-604c7.firebaseio.com/my-bets.json', bets);
  }

  getBets() {
    return this.http.get('https://bet-app-604c7.firebaseio.com/my-bets.json');
  }

  updateMatches(matches: MatchModel[], i: number) {
    return this.http.put('https://bet-app-604c7.firebaseio.com/events/' + i + '/matchList.json', matches);
  }

  getMatches(i: number) {
    return this.http.get('https://bet-app-604c7.firebaseio.com/events/' + i + '/matchList.json');
  }

  updateEvents(events: EventModel[]) {
    return this.http.put('https://bet-app-604c7.firebaseio.com/events.json', events);
  }

  getEvents() {
    return this.http.get('https://bet-app-604c7.firebaseio.com/events.json');
  }
}
