import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {EventModel} from '../shared/event.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-select',
  templateUrl: './event-select.component.html',
  styleUrls: ['./event-select.component.css']
})
export class EventSelectComponent implements OnInit {
  eventNames = [];

  constructor(private dataStorageService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.dataStorageService.getEvents().subscribe(
      (events: EventModel[]) => {
        if (events != null) {
          for (let i = 0; i < events.length; i++) {
            this.eventNames.push(events[i].name);
          }
        }
      },
      (error) => console.log('Could not get events from database!')
    );
  }

  onEventSelect(i: number) {
    this.router.navigate([''], {relativeTo: this.route});

    this.router.navigate([i], {relativeTo: this.route});
  }
}
