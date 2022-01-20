import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // @ts-ignore
  checkoutFromGroup: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.checkoutFromGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      }),
    })
  }

  onSubmit() {
    console.log("Handling the submit button");
    console.log(this.checkoutFromGroup.get('customer')?.value);
    console.log("email address is: " + this.checkoutFromGroup.get('customer')?.value.email);
  }

  copyShippingAddressToBillingAddress(event: Event) {
    // @ts-ignore
    if (event.target.checked) {
      this.checkoutFromGroup.controls.billingAddress
        .setValue(this.checkoutFromGroup.controls.shippingAddress.value);
    } else {
      this.checkoutFromGroup.controls.billingAddress.reset();
    }
  }
}
