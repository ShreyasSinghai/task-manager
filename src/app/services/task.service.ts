import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor() {}

  addTask(title: string) {
    const task: Task = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    this.tasks.push(task);
    this.tasksSubject.next([...this.tasks]);
  }

  toggleTask(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.tasksSubject.next([...this.tasks]);
    }
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }
}
