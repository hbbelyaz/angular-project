import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ShopCart } from '../services/shop-cart';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly cart = inject(ShopCart);

  readonly totalQuantity = this.cart.totalQuantity;
  readonly totalPrice = this.cart.totalPrice;

  formatMad(value: number): string {
    return `${value.toFixed(2).replace('.', ',')} MAD`;
  }

  viderPanier(): void {
    this.cart.clear();
  }
}
