import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BetModel} from '../my-bets/bet/bet.model';
import {MatchModel} from './match.model';

@Injectable()
export class DataStorageService {
  bet: BetModel;

  constructor(private http: HttpClient) {
  }

  updateBets(bets: BetModel[]) {
    return this.http.put('https://bet-app-604c7.firebaseio.com/my-bets.json', bets);
  }

  getBets() {
    return this.http.get('https://bet-app-604c7.firebaseio.com/my-bets.json');
  }

  updateResults(results: MatchModel[]) {
    return this.http.put('https://bet-app-604c7.firebaseio.com/results.json', results);
  }

  getResults() {
    return this.http.get('https://bet-app-604c7.firebaseio.com/results.json');
  }

}
