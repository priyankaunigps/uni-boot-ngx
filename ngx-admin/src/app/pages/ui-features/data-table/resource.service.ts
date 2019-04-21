import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Resource } from './resource';

@Injectable()
export class ResourceService {

  private resourceUrl = 'http://localhost:8080/demo/all';

  constructor(private http: HttpClient) { }

  getResource(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.resourceUrl);
  }
}

