import { DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { Task as TaskItem } from './task.model';

@Component({
  selector: 'app-task',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task {
  title: string = 'TaskFlow';
  canDelete: boolean = false;

  tasks: TaskItem[] = [
    { id: 1, title: 'Lire le cours Angular', dueDate: '2026-11-13T00:00:00' },
    { id: 2, title: 'Installer la CLI', dueDate: '2026-11-14T00:00:00' },
    { id: 3, title: 'Créer TaskFlow', dueDate: '2026-11-15T00:00:00' },
  ];

  rename(): void {
    this.title = 'Mes tâches';
    this.canDelete = true;
  }

  delete(): void {
    this.title = '';
  }

  clearTasks(): void {
    this.tasks = [];
  }
}
