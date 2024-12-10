import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CourseDto } from "./course-dto";
import { HttpConfig } from "../../config/http-config";

@Injectable({
    providedIn: 'root'
})

export class CourseService{
    private urlExtension: string = 'api/course';
    constructor(private http: HttpClient){}

    getCourses(): Observable<CourseDto[]> {
        let pars = new HttpParams();
        pars.set('active', true);
        return this.http.get<CourseDto[]>(`${HttpConfig.apiUrl}`, {params: pars});
    }
}