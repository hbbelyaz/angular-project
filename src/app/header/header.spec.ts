import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ShopCart } from '../services/shop-cart';
import type { Produit } from '../produit.model';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should display the shop brand and cart summary', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Shop');
    expect(fixture.nativeElement.textContent).toContain('0 MAD');
  });

  it('should empty the cart when the clear button is clicked', () => {
    const cart = TestBed.inject(ShopCart);
    const produit: Produit = {
      id: 1,
      nom: 'Huile moteur',
      description: 'Huile synthétique',
      prix: 420,
      categorie: 'Entretien',
    };
    cart.add(produit);
    fixture.detectChanges();

    const clearButton = fixture.nativeElement.querySelector('.clear-cart') as HTMLButtonElement;
    expect(clearButton.disabled).toBe(false);
    clearButton.click();
    fixture.detectChanges();

    expect(cart.totalQuantity()).toBe(0);
    expect(fixture.nativeElement.textContent).toContain('0,00 MAD');
    expect(clearButton.disabled).toBe(true);
  });
});
