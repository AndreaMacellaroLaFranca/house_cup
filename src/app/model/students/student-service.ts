import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Studentsummary } from "./student-summary";
import { HttpConfig } from "../../config/http-config";
import { StudentDetails } from "./student-details";
@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private urlExtension: string = "/student"
    constructor(private http: HttpClient) { }
    getStudentDetails(): Observable<Studentsummary[]> {
        return this.http.get<Studentsummary[]>(`${HttpConfig.apiUrl}${this.urlExtension}`);
    }

    getStudentDetailsPlus(id: number): Observable<Studentsummary> {
        return this.http.get<Studentsummary>(`${HttpConfig.apiUrl}${this.urlExtension}/${id}`)
    }
    

    
}
