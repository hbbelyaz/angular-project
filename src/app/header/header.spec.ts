import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should display the title and disable delete while canDelete is false', () => {
    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('h1') as HTMLHeadingElement;
    const deleteButton = fixture.nativeElement.querySelector(
      'button:last-child',
    ) as HTMLButtonElement;

    expect(heading.textContent).toBe('TaskFlow');
    expect(deleteButton.disabled).toBe(true);
  });

  it('should rename the title and enable delete when the rename button is clicked', () => {
    fixture.detectChanges();

    const renameButton = fixture.nativeElement.querySelector(
      'button:first-of-type',
    ) as HTMLButtonElement;
    const deleteButton = fixture.nativeElement.querySelector(
      'button:last-child',
    ) as HTMLButtonElement;
    renameButton.click();
    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('h1') as HTMLHeadingElement;
    expect(heading.textContent).toBe('Mes tâches');
    expect(deleteButton.disabled).toBe(false);
  });

  it('should clear the title and disable delete after clicking the delete button', () => {
    fixture.detectChanges();

    const renameButton = fixture.nativeElement.querySelector(
      'button:first-of-type',
    ) as HTMLButtonElement;
    const deleteButton = fixture.nativeElement.querySelector(
      'button:last-child',
    ) as HTMLButtonElement;

    renameButton.click();
    fixture.detectChanges();
    deleteButton.click();
    fixture.detectChanges();

    const heading = fixture.nativeElement.querySelector('h1') as HTMLHeadingElement;
    expect(heading.textContent).toBe('');
    expect(deleteButton.disabled).toBe(true);
  });
});
