import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: weatherService){

  }
  
  ngOnInit(): void {
    this.weatherService.getWeatherData('wellington').subscribe({
      next:(response)=>{
console.log(response)
      }
    })
  }
}
