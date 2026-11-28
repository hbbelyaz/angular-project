import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Aside {}
