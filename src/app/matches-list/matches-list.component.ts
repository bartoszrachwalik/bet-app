import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {DataStorageService} from '../shared/data-storage.service';
import {MatchModel} from '../shared/match.model';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {
  matchForm: FormGroup;
  matches: MatchModel[];

  constructor(private dataStorageService: DataStorageService) {
  }

  getMatchForms() {
    return <FormArray>this.matchForm.get('matches');
  }

  ngOnInit() {
    this.matchForm = new FormGroup({
      matches: new FormArray([], [Validators.required])
    });

    this.dataStorageService.getMatches().subscribe(
      (results: MatchModel[]) => {
        if (results != null) {
          this.matches = results;
          for (const match of this.matches) {
            this.getMatchForms().push(
              new FormGroup(
                {
                  Id: new FormControl(match.Id, [Validators.required]),
                  homeTeam: new FormControl(match.homeTeam, [Validators.required]),
                  awayTeam: new FormControl(match.awayTeam, [Validators.required]),
                  homeScore: new FormControl(match.homeScore, [Validators.min(0)]),
                  awayScore: new FormControl(match.awayScore, [Validators.min(0)]),
                  matchDate: new FormControl(match.matchDate, [Validators.required]),
                }
              ));
          }
        }
      },
      () => console.log('Could not get matches from database!')
    );
  }

  onAddMatch() {
    const matchForm = new FormGroup({
      Id: new FormControl(null),
      homeTeam: new FormControl(null, [Validators.required]),
      awayTeam: new FormControl(null, [Validators.required]),
      homeScore: new FormControl(null, [Validators.min(0)]),
      awayScore: new FormControl(null, [Validators.min(0)]),
      matchDate: new FormControl(null),
    });
    this.getMatchForms().push(matchForm);
  }

  onDeleteMatch(i: number) {
    this.getMatchForms().removeAt(i);
  }

  onUpdateMatches() {
    const matches = [];
    let i = 0;
    for (const match of this.getMatchForms().controls) {
      matches.push(
        new MatchModel(
          i,
          match.get('homeTeam').value,
          match.get('awayTeam').value,
          match.get('homeScore').value,
          match.get('awayScore').value,
          new Date
        )
      );
      i++;
    }

    this.dataStorageService.updateMatches(matches).subscribe(
      () => console.log('Matches updated successfully in database!'),
      () => console.log('Could not update matches in database!'),
    );
  }
}
