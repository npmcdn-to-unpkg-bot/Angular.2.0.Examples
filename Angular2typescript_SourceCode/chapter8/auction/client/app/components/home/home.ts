import {Component} from 'angular2/core';
import {Observable} from "rxjs/Observable";

import {Product, ProductService} from 'app/services/product-service';
import CarouselComponent from '../carousel/carousel';
import ProductItemComponent from '../product-item/product-item';


@Component({
  selector: 'auction-home-page',
  providers: [],
  directives: [
    CarouselComponent,
    ProductItemComponent
  ],
  styleUrls: ['app/components/home/home.css'],
  template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <auction-carousel></auction-carousel>
      </div>
    </div>
    <div class="row">
      <div *ngFor="#product of products | async" class="col-sm-4 col-lg-4 col-md-4">
        <auction-product-item [product]="product"></auction-product-item>
      </div>
    </div>
  `
})
export default class HomeComponent {
  products: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();

    this.productService.searchEvent
      .subscribe(
        params => this.products = this.productService.search(params),
          err =>  console.log("Can't get products. Error code: %s, URL: %s "),
        () => console.log('DONE')
      );
  }
}
