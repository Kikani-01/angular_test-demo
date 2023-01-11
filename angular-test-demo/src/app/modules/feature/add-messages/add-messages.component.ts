import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css'],
})
export class AddMessagesComponent {
  constructor(private formBuilder: FormBuilder) {}
  public messageForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  onSubmit(form: any) {
    console.log('form :>> ', form);
  }
}
