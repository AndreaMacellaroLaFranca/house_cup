import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsScoreComponent } from './students-score.component';

describe('StudentsScoreComponent', () => {
  let component: StudentsScoreComponent;
  let fixture: ComponentFixture<StudentsScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
