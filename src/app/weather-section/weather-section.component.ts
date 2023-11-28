import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../types/noaaApiResponse';
import { WeatherSectionItemComponent } from '../weather-section-item/weather-section-item.component';

@Component({
  selector: 'app-weather-section',
  standalone: true,
  imports: [CommonModule, WeatherSectionItemComponent],
  templateUrl: './weather-section.component.html',
  styleUrl: './weather-section.component.css'
})
export class WeatherSectionComponent {
  @Input() userLatAndLong: { lat: number, long: number } | null = null;
  weather: Array<ApiResponse> | null = null;
  constructor(private http: HttpClient){
  }
  ngOnChanges(){
    this.fetchWeather()
  }
  fetchWeather(){
    if (this.userLatAndLong !== null) {
      this.http.get<any>('https://api.weather.gov/points/' + this.userLatAndLong.lat + ',' + this.userLatAndLong.long).subscribe({
        next: (data) => {
          this.http.get<any>(data.properties.forecast).subscribe({
            next: (data) => {
              this.weather = data.properties.periods;
            }
          })
        },
        error: (error) => {
            console.log(error)
        },
        complete: () => {
            console.log('complete')
        }
      });
    }
  }
  
  
}
