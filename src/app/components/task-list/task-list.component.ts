import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, TaskFormComponent, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }
}
