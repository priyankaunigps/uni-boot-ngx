import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Resource } from './resource';

@Injectable()
export class ResourceService {
  postResource(resources) {
    let postURL="http://localhost:8080/demo/resource";
    this.http.post(postURL,resources).subscribe((result)=>{
      console.log("Result: "+result);
    });
  }

  private resourceUrl = 'http://localhost:8080/demo/all';


  constructor(private http: HttpClient) { }

  getResource(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.resourceUrl);
  }

}

