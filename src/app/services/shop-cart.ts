import { Injectable, computed, signal } from '@angular/core';
import type { Produit } from '../produit.model';

export interface ShopCartItem {
  produit: Produit;
  quantite: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShopCart {
  private readonly _items = signal<ShopCartItem[]>([]);

  readonly items = this._items.asReadonly();
  readonly totalQuantity = computed(() =>
    this._items().reduce((total, item) => total + item.quantite, 0),
  );
  readonly totalPrice = computed(() =>
    this._items().reduce((total, item) => total + item.produit.prix * item.quantite, 0),
  );

  add(produit: Produit): void {
    this._items.update((items) => {
      const existing = items.find((item) => item.produit.id === produit.id);
      if (existing) {
        return items.map((item) =>
          item.produit.id === produit.id ? { ...item, quantite: item.quantite + 1 } : item,
        );
      }
      return [...items, { produit, quantite: 1 }];
    });
  }

  clear(): void {
    this._items.set([]);
  }
}
