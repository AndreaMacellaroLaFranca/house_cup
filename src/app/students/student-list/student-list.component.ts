import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../model/students/student-service';
import { RouterModule } from '@angular/router';
import { StudentDetails } from '../../model/students/student-details';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  imports: [RouterModule, StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})

export class StudentListComponent implements OnInit {

  studentDetails!: StudentDetails[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    let osd: Observable<StudentDetails[]> = this.studentService.getStudentDetails();
    osd.subscribe({
      next: sts => this.studentDetails = sts,
      error: err => console.log(err)
    })
  };
}


