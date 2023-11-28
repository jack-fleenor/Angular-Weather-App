export type ApiResponse = {
  detailedForecast: string;
  dewpoint: { unitCode: string; value: number };
  endTime: string;
  icon: string;
  isDaytime: boolean;
  name: string;
  number: number;
  probabilityOfPrecipitation: { unitCode: string; value: null | number };
  relativeHumidity: { unitCode: string; value: null | number };
  shortForecast: string;
  startTime: string;
  temperature: number;
  temperatureTrend: string;
  temperatureUnit: string;
  windDirection: string;
  windSpeed: string;
};
