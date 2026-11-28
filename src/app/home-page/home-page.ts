import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Aside } from '../aside/aside';
import { Catalogue } from '../catalogue/catalogue';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-home-page',
  imports: [Header, Aside, Catalogue, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
