import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseDetails } from '../../../model/houses/house-details';

@Component({
  selector: 'app-score-details',
  imports: [RouterModule],
  templateUrl: './score-details.component.html',
  styleUrl: './score-details.component.css'
})
export class ScoreDetailsComponent {

  @Input({
    required: true
  })
  detail: HouseDetails | null = null;
  

 

  // @Output()
  // chooseHouseEvent = new EventEmitter<HouseDetails>();

}
