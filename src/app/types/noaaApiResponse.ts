export type ForecastPeriod = {
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

export type Forecast = {
  "geometry": {
      "type": string,
      "coordinates": Array<Array<Array<number>>>
  },
  "properties": {
      "updated": Date,
      "units": string,
      "forecastGenerator": string,
      "generatedAt": Date,
      "updateTime": Date,
      "validTimes": string,
      "elevation": {
          "unitCode": string,
          "value": number
      },
      "periods": Array<ForecastPeriod>
  }
}

export type Points = {
    "id": string,
    "type": string,
    "geometry": {
        "type": string,
        "coordinates": Array<number>
    },
    "properties": {
        "@id": string,
        "@type": string,
        "cwa": string,
        "forecastOffice": string,
        "gridId": string,
        "gridX": number,
        "gridY": number,
        "forecast": string,
        "forecastHourly": string,
        "forecastGridData": string,
        "observationStations": string,
        "relativeLocation": {
            "type": string,
            "geometry": {
                "type": string,
                "coordinates": Array<number>
            },
            "properties": {
                "city": string,
                "state": string,
                "distance": {
                    "unitCode": string,
                    "value": number
                },
                "bearing": {
                    "unitCode": string,
                    "value": number
                }
            }
        },
        "forecastZone": string,
        "county": string,
        "fireWeatherZone": string,
        "timeZone": string,
        "radarStation": string
    }
}
