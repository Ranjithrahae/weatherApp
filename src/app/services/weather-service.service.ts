import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http:HttpClient) {}
    getWeatherData(cityName:String){
      this.http.get(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostName,environment.XRapidAPIHostValue)
      .set(environment.XRapidAPIKeyName,environment.XRapidAPIKeyValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units','metric')
      .set('mode','json')
      })
    }
}
