import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitCard } from '../produit-card/produit-card';
import { CarProduct } from '../services/car-product';
import { ShopCart } from '../services/shop-cart';
import type { Produit } from '../produit.model';

@Component({
  selector: 'app-catalogue',
  imports: [FormsModule, ProduitCard],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Catalogue {
  private readonly carProduct = inject(CarProduct);
  private readonly shopCart = inject(ShopCart);

  readonly produits = signal<Produit[]>([...this.carProduct.produits]);
  readonly searchTerm = signal('');
  readonly produitsFiltres = computed(() => {
    const term = this.searchTerm().trim().toLocaleLowerCase('fr-FR');

    return this.produits().filter(
      (produit) =>
        produit.nom.toLocaleLowerCase('fr-FR').includes(term) ||
        produit.categorie.toLocaleLowerCase('fr-FR').includes(term),
    );
  });
  get searchValue(): string {
    return this.searchTerm();
  }

  set searchValue(value: string) {
    this.searchTerm.set(value);
  }

  ajouterAuPanier(produit: Produit): void {
    this.shopCart.add(produit);
  }

}
