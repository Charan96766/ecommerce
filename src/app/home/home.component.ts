import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Include CommonModule to use *ngFor
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected to styleUrls
})
export class HomeComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';

  constructor() {
    this.fetchProducts();
  }

  fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.products = data;
        this.filteredProducts = data;
        this.categories = Array.from(new Set(data.map((product: any) => product.category)));
      });
  }

  filterProducts(event: Event) {
    const target = event.target as HTMLSelectElement; // Type cast for target
    const category = target.value;
    this.selectedCategory = category;
    this.filteredProducts = category === '' 
      ? this.products 
      : this.products.filter(product => product.category === category);
  }
}
