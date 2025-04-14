import { Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { LoginComponentComponent } from './login-component/login-component.component';

export const routes: Routes = [
    {path: '', component: ScheduleComponent},
    {path: 'add-workout-form', component: WorkoutFormComponent},
    {path: 'workout-list', component: WorkoutListComponent},
    {path: 'login', component: LoginComponentComponent}
];
