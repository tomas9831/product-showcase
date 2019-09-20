import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = 'Our products';
  imageWidth: number = 50;
  showImage: boolean = true;
  showTable: boolean = true;
  filterText: string;
  errMessage: string;
  products: IProduct[];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  toggleTable(): void {
    this.showTable = !this.showTable;
  }

  onProduct(productId: number): void {
    this.router.navigate(['/products', productId]);
  }
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: products => (this.products = products),
      error: err => (this.errMessage = err)
    });
  }
}
