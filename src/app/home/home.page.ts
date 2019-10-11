import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
city =[]
weatherData:any;
min
max
temp
cityname : string="";

  constructor(public weatherService:WeatherService) { }


  getWeather(){
    this.weatherService.weatherUpdate(this.cityname).subscribe(
      data =>{
        this.weatherData = data;
        console.log(this.weatherData);
        this.temp = Math.round(this.weatherData.main.temp - 273.15);
        this.max = Math.round(this.weatherData.main.temp_max - 273.15);
        this.min = Math.round(this.weatherData.main.temp_min - 273.15);
        console.log(this.temp);
        console.log(this.max);
        console.log(this.min); 
      })
  }
  }

  
