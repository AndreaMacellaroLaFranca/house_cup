import { Injectable } from "@angular/core";
import { HouseDetails } from "./house-details";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HouseRankingDto } from "./house-ranking-dto";

@Injectable({
    providedIn: 'root'
})
export class HouseService {
    constructor(private http: HttpClient) { }
    getHouseDetails(): Observable<HouseRankingDto> {
        return this.http.get<HouseRankingDto>("http://localhost:8080/ranking");
    }
}
