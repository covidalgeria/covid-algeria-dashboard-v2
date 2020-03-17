import { Component, OnInit } from '@angular/core';

import { City } from '../models/city.model';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: City[];

  constructor(private citiesServices: CitiesService) {
    this.cities = this.citiesServices.getCities();
  }

  ngOnInit() {
  }

}
