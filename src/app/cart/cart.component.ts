import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [
    { title: 'Sample Product 1', image: 'https://fakestoreapi.com/img/71pWzh9K-uL._AC_UL640_QL65_.jpg', price: 29.99 },
    { title: 'Sample Product 2', image: 'https://fakestoreapi.com/img/61bGo1I7mFL._AC_UL640_QL65_.jpg', price: 19.99 }
  ];

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }
}