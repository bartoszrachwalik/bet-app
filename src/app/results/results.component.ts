import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {DataStorageService} from '../shared/data-storage.service';
import {MatchModel} from '../shared/match.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  resultForm: FormGroup;
  results: MatchModel[];

  constructor(private dataStorageService: DataStorageService) {
  }

  getResultForms() {
    return <FormArray>this.resultForm.get('results');
  }

  ngOnInit() {
    this.resultForm = new FormGroup({
      results: new FormArray([], [Validators.required])
    });

    this.dataStorageService.getResults().subscribe(
      (results: MatchModel[]) => {
        this.results = results;
        for (const result of this.results) {
          this.getResultForms().push(new FormGroup(
            {
              matchID: new FormControl(result.matchID, [Validators.required]),
              homeTeam: new FormControl(result.homeTeam, [Validators.required]),
              awayTeam: new FormControl(result.awayTeam, [Validators.required]),
              homeScore: new FormControl(result.homeScore, [Validators.required]),
              awayScore: new FormControl(result.awayScore, [Validators.required]),
              date: new FormControl(result.date, [Validators.required]),
            }
          ));
        }
      },
      () => console.log('Wrong')
    );
  }

  onAddMatch() {
    const matchForm = new FormGroup({
      matchID: new FormControl(null, [Validators.required]),
      homeTeam: new FormControl(null, [Validators.required]),
      awayTeam: new FormControl(null, [Validators.required]),
      homeScore: new FormControl(null, [Validators.required]),
      awayScore: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    });
    this.getResultForms().push(matchForm);
  }

  onDeleteMatch(i: number) {
    this.getResultForms().removeAt(i);
  }

  onUpdateMatch() {
    const results = [];
    let i = 0;
    for (const result of this.getResultForms().controls) {
      results.push(new MatchModel(
        i,
        result.get('homeTeam').value,
        result.get('awayTeam').value,
        result.get('homeScore').value,
        result.get('awayScore').value,
        new Date));
      i++;
    }

    this.dataStorageService.updateResults(results).subscribe(
      () => console.log('OK'),
      () => console.log('Wrong'),
    );
  }
}
