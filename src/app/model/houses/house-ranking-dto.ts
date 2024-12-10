import { HouseDetails } from "./house-details";

export interface HouseRankingDto {
    rankings: HouseDetails[];
    winner: HouseDetails;
}