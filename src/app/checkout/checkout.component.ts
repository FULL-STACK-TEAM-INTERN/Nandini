import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) { 
    // this.checkoutForm =formBuilder.group({ //Building form using form builder
    //   emailField: new FormControl(), //In form builder we are creating a group of form elements 
    //   pass: new FormControl(), //these should be exactly same as your form
    //   terms: new FormControl(),
    //   genderField: new FormControl(),
    //   genderField1: new FormControl()

      this.checkoutForm =formBuilder.group({ //Building form using form builder
        emailField: ['',[Validators.required,
                         Validators.email,
                         Validators.minLength(5)
                        ]], //In form builder we are creating a group of form elements 
        pass: ['',Validators.required], //these should be exactly same as your form
        terms: ['',Validators.requiredTrue],
        genderField: new FormControl(),
        genderField1: new FormControl()
    });
   }

  ngOnInit(): void {
    // this.checkoutForm.patchValue({
    //   emailField: 'nandini@gmail.com',
    //   pass: 'nandini',
    //   terms: true
    // })

    // this.checkoutForm.get('emailField').valueChanges.subscribe(data=>{
    //   console.log(data);
    // });

    this.checkoutForm.get('emailField').statusChanges.subscribe(data=>{
      console.log(data);
    });
  }

  postData(){
    console.log(`Entire FormGroup`+this.checkoutForm);
    console.log(`Entire Form Values`+this.checkoutForm.value);
    console.log(`Email address`+this.checkoutForm.value.emailField);
    this.checkoutForm.reset();

  }
  resetForm(){
    this.checkoutForm.reset();
  }
  moveto(){
    this.router.navigateByUrl('/signin')
  }
  
}
