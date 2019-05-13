import { Component } from '@angular/core';
import { EventsService } from '../../../@core/service/events.service';
import { Event } from '../../../@core/data/event';
import 'rxjs/add/operator/map';


@Component({
  selector: 'ngx-googlemap',
  styleUrls: ['./googlemap.component.scss'],
  templateUrl: './googlemap.component.html',
})

export class GooglemapComponent {
  marker: any = [];
  events;
  latLng;
  positions: any;
  map ;
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((res: Event[]) => {
      this.events = res.map(data=> [data.latitude, data.longitude]).splice(10,1000);
        });

  }
  onMapReady(map, arg2 ){
    console.log('map', map);


/*
    this.events.forEach((event) => {
      marker= this.events;
      map = google.maps.Map;
     this.latLng = new google.maps.Marker(event.latLng);
     var marker = new google.maps.Marker({
      position: event.latLng,
      map:map
      //create marker here
      //take position attributes (event latitude and latitude)
      //once marker is created, then add that marker to the map
    });
    marker.setMap(map);
    });
  */
  }
  onIdle(event) {
    
  }
  onMarkerInit(marker) {

  }
  onMapClick(map) {
    this.events.push(event.target);
    map.target.panTo(event.target);
  }
}


