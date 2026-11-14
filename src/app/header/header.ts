import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  title = 'TaskFlow';
  canDelete = false;

  rename(): void {
    this.title = 'Mes tâches';
    this.canDelete = true;
  }

  delete(): void {
    this.title = '';
    this.canDelete = false;
  }
}
