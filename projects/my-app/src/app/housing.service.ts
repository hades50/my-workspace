
import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { housingLocationData } from './house-data';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return housingLocationData;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return housingLocationData.find(housingLocation => housingLocation.id === id);
  }
}
