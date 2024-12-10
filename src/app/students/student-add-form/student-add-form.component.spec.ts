import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddFormComponent } from './student-add-form.component';

describe('StudentAddFormComponent', () => {
  let component: StudentAddFormComponent;
  let fixture: ComponentFixture<StudentAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
