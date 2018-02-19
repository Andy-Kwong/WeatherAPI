import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})

export class SanJoseComponent implements OnInit {
    humidity: String;
    avgTemp: String;
    highTemp: String;
    lowTemp: String;
    weatherStatus: String;
    weatherData: any;

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getSanJoseWeather();
    }

    getSanJoseWeather() {
        let observable = this._httpService.getWeather("94088");
        observable.subscribe(data => {
            this.humidity = data.main.humidity;
            this.avgTemp = data.main.temp;
            this.highTemp = data.main.temp_max;
            this.lowTemp = data.main.temp_min;
            this.weatherStatus = data.weather[0].description;
            this.weatherData = data;
        })
    }

}
