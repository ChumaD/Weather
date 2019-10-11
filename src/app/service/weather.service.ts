import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
city = [];
cityname  : string = ""
  constructor(public http: HttpClient) { }

  weatherUpdate(cityname){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityname +",code&APPID=e75c8c9ec1841c1926ff4fcc5a90425c")
  }

  SearchCity(){
 return this.city;
  }
}
