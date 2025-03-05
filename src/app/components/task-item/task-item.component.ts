import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() toggle = new EventEmitter<number>();
}
