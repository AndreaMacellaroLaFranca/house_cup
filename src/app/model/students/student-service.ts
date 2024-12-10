import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StudentDetails } from "./student-details";
import { HttpConfig } from "../../config/http-config";
import { StudentDetailsPlus } from "./student-details-plus";
@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private urlExtension: string = "/students"
    constructor(private http: HttpClient) { }
    getStudentDetails(): Observable<StudentDetails[]> {
        return this.http.get<StudentDetails[]>(`${HttpConfig.apiUrl}${this.urlExtension}`);
    }

    getStudentDetailsPlus(id: number): Observable<StudentDetailsPlus> {
        return this.http.get<StudentDetailsPlus>(`${HttpConfig.apiUrl}${this.urlExtension}/${id}`)
    }
    

    
}
