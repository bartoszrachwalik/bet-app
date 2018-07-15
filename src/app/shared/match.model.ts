export class MatchModel {
  Id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  matchDate: Date;

  constructor(Id: number, homeTeam: string, awayTeam: string, homeScore: number, awayScore: number, matchDate: Date) {
    this.Id = Id;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.matchDate = matchDate;
  }
}
