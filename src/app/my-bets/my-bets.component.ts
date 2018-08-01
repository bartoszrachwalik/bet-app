import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {DataStorageService} from '../shared/data-storage.service';

import {MatchModel} from '../shared/match.model';
import {BetModel} from './bet.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-my-bets',
  templateUrl: './my-bets.component.html',
  styleUrls: ['./my-bets.component.css']
})
export class MyBetsComponent implements OnInit {
  bets: BetModel[];
  matches: MatchModel[];
  betForm: FormGroup;
  id: number;

  constructor(private dataStorageService: DataStorageService,
              private route: ActivatedRoute) {
  }

  getBetForms() {
    return <FormArray>this.betForm.get('bets');
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.betForm = new FormGroup({
        bets: new FormArray([])
      });
      this.id = +params['id'];
      this.dataStorageService.getMatches(this.id).subscribe(
        (matches: MatchModel[]) => {
          if (matches != null) {
            this.matches = matches;
            for (const match of this.matches) {
              this.addBetControl(match);
            }
          }
          this.dataStorageService.getBets().subscribe(
            (bets: BetModel[]) => {
              if (bets != null) {
                this.bets = bets;
                for (const bet of bets) {
                  this.getBetForms().at(bet.matchId).setValue(
                    {
                      matchId: bet.matchId,
                      homeScore: bet.homeScore,
                      awayScore: bet.awayScore
                    });
                }
              }
            },
            () => console.log('Could not get bets from database!')
          );
        },
        () => console.log('Could not get matches from database!')
      );
    });
  }

  onUpdateBets() {
    this.dataStorageService.updateBets(this.betForm.get('bets').value).subscribe(
      () => console.log('Succesfully updated bets in database!'),
      () => console.log('Could not update bets in database!')
    );
  }

  addBetControl(match: MatchModel) {
    const betForm = new FormGroup({
      matchId: new FormControl(match.id),
      homeScore: new FormControl(null, [Validators.min(0)]),
      awayScore: new FormControl(null, [Validators.min(0)])
    });
    this.getBetForms().push(betForm);
  }
}
