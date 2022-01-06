import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../common/product";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../common/cart-item";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  private handleProductDetails() {
    // Get the id param string and convert it to a number with "+" symbol.
    // @ts-ignore
    const productId: number = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(productId).subscribe(
      data => {
        this.product = data;
      })
  }

  addToCart() {
    console.log(`Adding to cart ${this.product.name}, ${this.product.unitPrice}`);
    const cartItem = new CartItem(this.product);
    this.cartService.addToCart(cartItem);
  }

}
