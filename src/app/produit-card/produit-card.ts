import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { Produit } from '../produit.model';

@Component({
  selector: 'app-produit-card',
  imports: [],
  templateUrl: './produit-card.html',
  styleUrl: './produit-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProduitCard {
  readonly produit = input.required<Produit>();
  readonly ajouter = output<Produit>();

  formatMad(value: number): string {
    return `${value.toFixed(2).replace('.', ',')} MAD`;
  }
}
