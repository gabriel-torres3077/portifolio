import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {

  //set the category object array
  categories: any = [];

  //set base form fields
  emailForm = this.fb.group({
    name: [''],
    email: ['', Validators.required],
    category: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  //default variables
  submitted: Boolean = false;

  constructor(
    private fb: FormBuilder,
  ) { 
    //load categories
    of(this.getCategories()).subscribe(
      (data) => { this.categories = data}
    )
  }

  ngOnInit(): void {
    this.categories = this.getCategories();
    console.log(this.categories)
  }

  getCategories(){
    return [
      {id: 1, name: 'Sugestion'},
      {id: 2, name: 'Job Offer'},
      {id: 3, name: 'Report Bug'},
      {id: 4, name: 'Other'}
    ]
  }

  onSubmit(){
    console.log(this.emailForm.value)
  }

  get emailFormControl() {
    return this.emailForm.controls;
  }


}
