import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherSectionItemComponent } from '../weather-section-item/weather-section-item.component';
import { WeatherApiService } from '../services/weather-api.service';
import { ForecastPeriod } from '../types/noaaApiResponse';

@Component({
  selector: 'app-weather-section',
  standalone: true,
  imports: [CommonModule, WeatherSectionItemComponent],
  templateUrl: './weather-section.component.html',
  styleUrl: './weather-section.component.css'
})
export class WeatherSectionComponent {
  @Input() userLatAndLong: { lat: number, long: number } | null = null;
  weather: Array<ForecastPeriod> | null = null;
  constructor(private weatherService: WeatherApiService){}
  ngOnChanges(){
    this.fetchWeather()
  }
  async fetchWeather(){
    if (this.userLatAndLong !== null) {
      this.weather = await this.weatherService.fetchForecast(
        this.userLatAndLong.lat, this.userLatAndLong.long
      ) 
    }
  }
  
  
}
