import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { ScoreComponent } from './scores/houses-score/score/score.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'students', component: StudentListComponent },
    { path: 'scores', component: ScoreComponent },
    { path: 'students/:id', component: StudentDetailsComponent }
];
