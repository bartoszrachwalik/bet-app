export class BetModel {
  matchId: number;
  homeScore: number;
  awayScore: number;

  constructor(matchId: number, homeScore: number, awayScore: number) {
    this.matchId = matchId;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
  }
}
