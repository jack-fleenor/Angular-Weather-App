import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forecast, ForecastPeriod, Points } from '../types/noaaApiResponse';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor() {}
  async fetchForecast(
    lat: number,
    long: number
  ): Promise<Array<ForecastPeriod>> {
    const forecastEndpoint = await this.fetchPoints(lat, long);
    let result: Array<ForecastPeriod> = await fetch(forecastEndpoint)
      .then((res) => res.json())
      .then((data: Forecast) => data.properties.periods);
    return result;
  }
  async fetchPoints(lat: number, long: number): Promise<string> {
    const pointsEndpoint = 'https://api.weather.gov/points/' + lat + ',' + long;
    let result: string = await fetch(pointsEndpoint)
      .then((res) => res.json())
      .then((data: Points) => data.properties.forecast);
    return result;
  }
}
