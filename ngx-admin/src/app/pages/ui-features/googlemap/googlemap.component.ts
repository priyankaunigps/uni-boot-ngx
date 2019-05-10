import { Component } from '@angular/core';
import { EventsService } from '../../../@core/service/events.service';

@Component({
  selector: 'ngx-googlemap',
  styleUrls: ['./googlemap.component.scss'],
  templateUrl: './googlemap.component.html',
})
export class GooglemapComponent {
  lat: string = '';
  lng: string = '';

  location: object;
  constructor(private eventsService: EventsService) { }

  ngOnInit() {

  }



}
