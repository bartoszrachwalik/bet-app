import {BetModel} from '../my-bets/bet.model';

export class UserModel {
  id: string;
  name: string;
  bets: BetModel[];
  points: number;
  perfectBets: number;
  goodBets: number;


  constructor(id: string, name: string, bets: BetModel[], points: number, perfectBets: number, goodBets: number) {
    this.id = id;
    this.name = name;
    this.bets = bets;
    this.points = points;
    this.perfectBets = perfectBets;
    this.goodBets = goodBets;
  }
}
