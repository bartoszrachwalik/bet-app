export class MatchModel {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  matchDate: Date;

  constructor(id: number, homeTeam: string, awayTeam: string, homeScore: number, awayScore: number, matchDate: Date) {
    this.id = id;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.matchDate = matchDate;
  }
}
