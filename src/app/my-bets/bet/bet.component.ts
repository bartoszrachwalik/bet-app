import {Component, Input, OnInit} from '@angular/core';
import {BetModel} from './bet.model';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {
  @Input() bet: BetModel;

  constructor() {
  }

  ngOnInit() {
  }

}
