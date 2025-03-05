import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  {
    path: 'stats',
    loadComponent: () =>
      import('./stats/task-stats/task-stats.component').then(
        (m) => m.TaskStatsComponent
      ),
  },
];
