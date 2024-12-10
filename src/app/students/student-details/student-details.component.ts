import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentDetails } from '../../model/students/student-details';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [RouterModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  @Input({
    required: true
  })
  detail: StudentDetails | null = null;

  // @Output()
  // chooseStudentEvent = new EventEmitter<StudentDetails>();

}
