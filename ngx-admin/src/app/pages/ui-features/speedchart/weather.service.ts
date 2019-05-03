import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/operator/map'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }
  dailyForcast(){
    return this._http.get("https://samples.openweathermap.org/data/2.5/history/city?q=warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
    .map(result => result);

  }
}
