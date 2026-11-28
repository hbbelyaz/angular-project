import { TestBed } from '@angular/core/testing';
import { Cart } from './cart';
import type { Produit } from './produit.model';

describe('Cart', () => {
  const produit: Produit = {
    id: 1,
    nom: 'Clavier',
    description: 'Clavier mécanique',
    prix: 50,
    categorie: 'Informatique',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should combine duplicate products and calculate quantity and price totals', () => {
    const cart = TestBed.inject(Cart);

    cart.add(produit);
    cart.add(produit);

    expect(cart.items()).toEqual([{ produit, quantite: 2 }]);
    expect(cart.totalQuantity()).toBe(2);
    expect(cart.totalPrice()).toBe(100);
  });

  it('should remove one copy at a time and clear the cart', () => {
    const cart = TestBed.inject(Cart);
    cart.add(produit);
    cart.add(produit);

    cart.removeOne(produit.id);
    expect(cart.items()).toEqual([{ produit, quantite: 1 }]);

    cart.removeOne(produit.id);
    expect(cart.items()).toEqual([]);
    expect(cart.totalQuantity()).toBe(0);

    cart.add(produit);
    cart.clear();
    expect(cart.totalPrice()).toBe(0);
  });
});
