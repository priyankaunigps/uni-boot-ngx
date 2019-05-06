import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventUrl = 'http://localhost:8080/demo/all';


  constructor(private http: HttpClient) { }
  getResource(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventUrl);
  }
}
