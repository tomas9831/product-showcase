import { IProduct } from "../product-list/product";
import { SearchFilterPipe } from "./search-filter.pipe";
import * as faker from "faker";

describe("SearchFilterPipe", () => {
  const pipe = new SearchFilterPipe();
  const products: IProduct[] = new Array();
  //vytvoríme si 50 náhodných produktov
  for (let i = 0; i < 50; i++) {
    let product = new IProduct();
    product.productName = faker.random.alphaNumeric(5);
    products.push(product);
  }

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });
  it("should return all products", () => {
    let searchText = "";
    expect(pipe.transform(products, searchText)).toEqual(products);
  });
  it("should return empty list", () => {
    let emptyProducts: IProduct[] = new Array();
    expect(pipe.transform(emptyProducts, "whatever")).toEqual([]);
  });
  it("should return list filtered with searchText", () => {
    //testujeme, či z poľa produktov najde ten spravny
    products.forEach((e) => {
      let tmpArray: IProduct[] = new Array();
      let tmp = products.find((x) => x.productName == e.productName);
      tmpArray.push(tmp);
      let searchText = e.productName;
      console.log(searchText);
      expect(pipe.transform(products, searchText)).toEqual(tmpArray);
    });
  });
});
