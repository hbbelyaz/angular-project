import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task } from './task';

describe('Task', () => {
  let component: Task;
  let fixture: ComponentFixture<Task>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should display the title and initial tasks', () => {
    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('h1') as HTMLHeadingElement;
    const items = fixture.nativeElement.querySelectorAll('li') as NodeListOf<HTMLLIElement>;
    const deleteButton = fixture.nativeElement.querySelector(
      '.delete-button',
    ) as HTMLButtonElement;

    expect(heading.textContent).toBe('TaskFlow');
    expect(
      Array.from(items).map((item) => ({
        title: item.querySelector('.task-name')?.textContent?.trim(),
        dueDate: item.querySelector('.due-date')?.textContent?.trim(),
      })),
    ).toEqual([
      { title: '1. LIRE LE COURS ANGULAR', dueDate: 'Échéance : 13/11/2026' },
      { title: '2. INSTALLER LA CLI', dueDate: 'Échéance : 14/11/2026' },
      { title: '3. CRÉER TASKFLOW', dueDate: 'Échéance : 15/11/2026' },
    ]);
    expect(fixture.nativeElement.querySelector('.empty')).toBeNull();
    expect(deleteButton.disabled).toBe(true);
  });

  it('should rename the title and enable deletion', () => {
    fixture.detectChanges();

    const renameButton = fixture.nativeElement.querySelector(
      '.rename-button',
    ) as HTMLButtonElement;
    const deleteButton = fixture.nativeElement.querySelector(
      '.delete-button',
    ) as HTMLButtonElement;

    renameButton.click();
    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('h1') as HTMLHeadingElement;
    expect(heading.textContent).toBe('Mes tâches');
    expect(deleteButton.disabled).toBe(false);
  });

  it('should clear the title when delete is clicked', () => {
    fixture.detectChanges();

    const renameButton = fixture.nativeElement.querySelector(
      '.rename-button',
    ) as HTMLButtonElement;
    const deleteButton = fixture.nativeElement.querySelector(
      '.delete-button',
    ) as HTMLButtonElement;

    renameButton.click();
    fixture.detectChanges();
    deleteButton.click();
    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('h1') as HTMLHeadingElement;
    expect(heading.textContent).toBe('');
  });

  it('should show the empty state after clearing the task list', () => {
    fixture.detectChanges();

    const clearButton = fixture.nativeElement.querySelector(
      '.clear-button',
    ) as HTMLButtonElement;
    clearButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(0);
    expect(fixture.nativeElement.querySelector('.empty')?.textContent?.trim()).toBe(
      "Aucune tâche pour l'instant",
    );
    const deleteButton = fixture.nativeElement.querySelector(
      '.delete-button',
    ) as HTMLButtonElement;
    expect(deleteButton.disabled).toBe(true);
    expect(clearButton.disabled).toBe(true);
  });
});
