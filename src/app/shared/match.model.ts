export class MatchModel {
  matchID: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date: Date;

  constructor(matchId: number, homeTeam: string, awayTeam: string, homeScore: number, awayScore: number, date: Date) {
    this.matchID = matchId;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.date = date;
  }
}
