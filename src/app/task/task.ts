import { DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import type { Task as TaskItem } from './task.model';

@Component({
  selector: 'app-task',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task {
  readonly title = signal<string>('TaskFlow');
  canDelete: boolean = false;

  readonly tasks = signal<TaskItem[]>([
    { id: 1, title: 'Lire le cours Angular', dueDate: '2026-11-13T00:00:00' },
    { id: 2, title: 'Installer la CLI', dueDate: '2026-11-14T00:00:00' },
    { id: 3, title: 'Créer TaskFlow', dueDate: '2026-11-15T00:00:00' },
  ]);

  readonly count = computed(() => this.tasks().length);

  rename(): void {
    this.title.set('Mes tâches');
    this.canDelete = true;
  }

  delete(): void {
    this.title.set('');
    this.canDelete = false;
  }

  clearTasks(): void {
    this.tasks.set([]);
  }

  addTask(): void {
    const newTask: TaskItem = {
      id: this.tasks().length + 1,
      title: 'Nouvelle tâche',
      dueDate: '2026-11-16T00:00:00',
    };

    this.tasks.update((items) => [...items, newTask]);
  }
}
