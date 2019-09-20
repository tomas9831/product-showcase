import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../product-list/product';
import { isNgTemplate } from '@angular/compiler';
import { filter } from 'minimatch';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(products: IProduct[], filterText: string): IProduct[] {
    if (!products) {
      return [];
    }
    if (!filterText) {
      return products;
    }
    filterText = filterText.toLowerCase();
    const filteredProducts: IProduct[] = new Array();
    products.forEach(product => {
      const productName = product.productName.toLowerCase();
      if (productName.includes(filterText)) {
        filteredProducts.push(product as IProduct);
      }
    });
    return filteredProducts;
  }
}
