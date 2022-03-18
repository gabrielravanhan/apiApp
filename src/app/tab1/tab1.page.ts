import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.buscarPrevisao();
  }

  buscarPrevisao() {
    this.weatherService.buscarPrevisao().subscribe(retornoPrevisao => {
      console.log(retornoPrevisao);
    });
  }

}
