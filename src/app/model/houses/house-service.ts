import { Injectable } from "@angular/core";
import { HouseDetails } from "./house-details";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HouseRankingDto } from "./house-ranking-dto";
import { HttpConfig } from "../../config/http-config";

@Injectable({
    providedIn: 'root'
})
export class HouseService {
    private urlExtension: string = '/house';
    constructor(private http: HttpClient) { }
    getHouseDetails(): Observable<HouseRankingDto> {
        return this.http.get<HouseRankingDto>(`${HttpConfig.apiUrl}/ranking`);
    }
    getHouses(): Observable<HouseDetails[]>{
        return this.http.get<HouseDetails[]>(`${HttpConfig.apiUrl}${this.urlExtension}`);
    }
}
