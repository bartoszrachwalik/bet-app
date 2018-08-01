import {MatchModel} from './match.model';
import {UserModel} from './user.model';

export class EventModel {

  name: string;
  matchList: MatchModel[];
  playersList: UserModel[];


  constructor(name: string, matchList: MatchModel[], playersList: UserModel[]) {
    this.name = name;
    this.matchList = matchList;
    this.playersList = playersList;
  }
}
