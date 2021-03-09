import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   items = this.cartService.getItems();
   checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartserviceService,
    private formBuilder: FormBuilder,
    ) {
    
   }

   onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}