import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Luv2ShopFormService } from "../../services/luv2-shop-form.service";

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

    checkoutFormGroup!: FormGroup;

    totalPrice: number = 0;
    totalQuantity: number = 0;

    creditCardYears: number[] = [];
    creditCardMonths: number[] = [];

    constructor(private formBuilder: FormBuilder,
                private luv2ShopFormService: Luv2ShopFormService) {}

    ngOnInit(): void {
        this.checkoutFormGroup = this.formBuilder.group({
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
            })
        });

        // populate credit card months
        const startMonth: number = new Date().getMonth() + 1;
        console.log("startMonth: " + startMonth);

        this.luv2ShopFormService.getCreditCardMonths(startMonth).subscribe({
                next: (data: number[]) => {
                    console.log("Retrieve credit card months: " + JSON.stringify(data));
                    this.creditCardMonths = data;
                },
                error: (error: Error) => {},
                complete: () => {}
            }
        );

        // populate credit card years

        this.luv2ShopFormService.getCreditCardYears().subscribe({
            next: (data: number[]) => {
                console.log("Retrieved credit card years: " + JSON.stringify(data));
                this.creditCardYears = data;
            },
            error: (error: Error) => {},
            complete: () => {}
        })
    }

    copyShippingAddressToBillingAddress(event: Event) {
        if((event.target as HTMLInputElement).checked) {
            this.checkoutFormGroup.controls["billingAddress"]
                .setValue(this.checkoutFormGroup.controls["shippingAddress"].value);
        } else {
            this.checkoutFormGroup.controls["billingAddress"].reset();
        }
    }

    onSubmit() {
        console.log("Handling the submit button");
        console.log(this.checkoutFormGroup.get('customer')!!.value);
    }
}
