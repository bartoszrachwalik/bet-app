import {Component, OnInit} from '@angular/core';
import {EventModel} from '../shared/event.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventModel[];
  eventsForm: FormGroup;

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.eventsForm = new FormGroup({
      events: new FormArray([])
    });

    this.dataStorageService.getEvents().subscribe(
      (events: EventModel[]) => {
        if (events != null) {
          this.events = events;
          for (const event of this.events) {
            this.addEventControl(event);
          }
        }
      },
      (error) => console.log('Could not get events from database!')
    );
  }

  getEventForms() {
    return <FormArray>this.eventsForm.get('events');
  }

  onUpdateEvents() {
    this.dataStorageService.updateEvents(this.eventsForm.get('events').value).subscribe(
      () => console.log('Events updated successfully in database!'),
      () => console.log('Could not update events in database!'),
    );
  }

  addEventControl(event: EventModel) {
    const eventForm = new FormGroup({
      name: new FormControl(event.name),
      matchList: new FormControl(event.matchList),
      playersList: new FormControl(event.playersList)
    });
    this.getEventForms().push(eventForm);
  }

  onAddEvent() {
    const eventForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      matchList: new FormControl(null),
      playersList: new FormControl(null)
    });
    this.getEventForms().push(eventForm);
  }
}
