import { Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: 'my-schedule', component: ScheduleComponent, canActivate: [authGuard]},
    {path: 'my-add-workout-form', component: WorkoutFormComponent, canActivate: [authGuard]},
    {path: 'my-workout-list', component: WorkoutListComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponentComponent}
];
