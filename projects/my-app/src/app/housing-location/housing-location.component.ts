import { Component, input, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  template: `
    <section class='listing'>
      <img [src]="housingLocation.photo" alt="Exterior of housing {{housingLocation.name}}" class="listing-photo">
      <h2 class="listing-heading"> {{ housingLocation.name}}</h2>
      <p class="listing-location"> {{housingLocation.city}} , {{housingLocation.state}}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}
