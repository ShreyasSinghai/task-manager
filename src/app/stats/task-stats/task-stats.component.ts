import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { RouterModule } from '@angular/router'; // Add this import
import { map } from 'rxjs';

@Component({
  selector: 'app-task-stats',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-stats.component.html',
  styleUrl: './task-stats.component.scss',
})
export class TaskStatsComponent {
  stats$ = this.taskService.getTasks().pipe(
    map((tasks) => ({
      total: tasks.length,
      completed: tasks.filter((t) => t.completed).length,
    }))
  );

  constructor(private taskService: TaskService) {}
}
