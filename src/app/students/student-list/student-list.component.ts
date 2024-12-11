import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../model/students/student-service';
import { RouterModule } from '@angular/router';
import { Studentsummary } from '../../model/students/student-summary';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  imports: [RouterModule, StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})

export class StudentListComponent implements OnInit {

  studentDetails!: Studentsummary[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    let osd: Observable<Studentsummary[]> = this.studentService.getStudentDetails();
    osd.subscribe({
      next: sts => this.studentDetails = sts,
      error: err => console.log(err)
    })
  };
}


