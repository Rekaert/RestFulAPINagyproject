import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.pug',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  OnInit() { }
  /*
    ValidateInputs() {
      const sendMessageControl = new FormControl('', Validators.required);
      let inputs: Array<number> = document.querySelector('.form-control');
      for (let i = 0; i < inputs.length; i++) {
        inputs.addEventListener('change', () => {
          if (inputs[i].value === '') {
            document.querySelector('.form-group').classList.add('has-error');
          } else {
            document.querySelector('.form-group').classList.add('has-success');
          }
        });
      }
    }*/
}
