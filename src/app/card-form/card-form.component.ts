import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  cardForm!: FormGroup;

  constructor() { }
 
  ngOnInit(): void {
    this.cardForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      expiration: new DateFormControl('', [
        Validators.required,
        Validators.pattern('^(0[1-9]|1[0-2])\\/\\d{2}$')


      ]),
      securityCode: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3)
      ])
    });
  }

  onSubmit() {
  
  }
 
  get name() {
    return this.cardForm.get('name')!;
  }

  get cardNumber() {
    return this.cardForm.get('cardNumber')!;
  }

  get expiration() {
    return this.cardForm.get('expiration')!;
  }

  get securityCode() {
    return this.cardForm.get('securityCode')!;
  }
}
