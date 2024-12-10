import { Component, OnInit } from '@angular/core';
import { HouseDetails } from '../../../model/houses/house-details';
import { HouseService } from '../../../model/houses/house-service';
import { RouterModule } from '@angular/router';
import { ScoreDetailsComponent } from "../score-details/score-details.component";
import { Observable } from 'rxjs';
import { HouseRankingDto } from '../../../model/houses/house-ranking-dto';

@Component({
  selector: 'app-score',
  imports: [RouterModule, ScoreDetailsComponent],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit {

  houseRankingDto!: HouseRankingDto;

  constructor(private houseService: HouseService) {
  }

  ngOnInit(): void {
    let osd: Observable<HouseRankingDto> = this.houseService.getHouseDetails();
    osd.subscribe({
      next: hsd => this.houseRankingDto = hsd,
      error: err => console.log(err)
    })
  }
 
}
