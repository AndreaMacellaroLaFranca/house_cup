import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HouseService } from '../../model/houses/house-service';
import { CourseService } from '../../model/courses/course-service';
import { HouseDetails } from '../../model/houses/house-details';
import { CourseDto } from '../../model/courses/course-dto';

@Component({
  selector: 'app-student-add-form',
  standalone: true,  
  imports: [CommonModule, ReactiveFormsModule],  
  templateUrl: './student-add-form.component.html',
  styleUrls: ['./student-add-form.component.css']
})
export class StudentAddFormComponent {
  studentForm!: FormGroup;
  houses: HouseDetails[] = [];
  courses: CourseDto[] = [];

  constructor(private houseService: HouseService, private courseService: CourseService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      dob: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(10)]],
      phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      background: ['', [Validators.minLength(5), Validators.maxLength(15)]],
      education: ['', [Validators.minLength(5), Validators.maxLength(15)]],
      pref: ['', [Validators.required]],
      course: ['', [Validators.required]],
      house: ['', [Validators.required]]
    });

    this.houseService.getHouses().subscribe({
      next: hs => (this.houses = hs),
      error: err => console.log(err)
    });

    this.courseService.getCourses().subscribe({
      next: cs => (this.courses = cs),
      error: err => console.log(err)
    });
  }

  trackByCourseId(index: number, item: CourseDto): string {
    return String(item.id);
  }

  trackByHouseId(index: number, item: HouseDetails): string {
    return String(item.id);
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
