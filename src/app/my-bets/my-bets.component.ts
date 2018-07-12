import {Component, OnInit} from '@angular/core';
import {BetModel} from './bet/bet.model';
import {MatchModel} from '../shared/match.model';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-my-bets',
  templateUrl: './my-bets.component.html',
  styleUrls: ['./my-bets.component.css']
})
export class MyBetsComponent implements OnInit {
  bets: BetModel[];
  matches: MatchModel[];

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.dataStorageService.getBets().subscribe(
      (bets: BetModel[]) => this.bets = bets,
      () => console.log('Wrong!')
    );
  }

  onUpdate() {
    this.dataStorageService.updateBets(this.bets).subscribe(
      () => console.log('OK!'),
      () => console.log('Wrong!')
    );
  }
}
