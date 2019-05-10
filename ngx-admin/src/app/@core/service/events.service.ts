import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventUrl = 'http://localhost:8080/events';
  data: any;


  constructor(private http: HttpClient) { }
  getEvents(): Observable<any[]> {
 
    return this.http.get<any[]>(this.eventUrl);
  }
}
