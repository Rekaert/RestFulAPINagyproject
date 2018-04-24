import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { FormsModule } from '@angular/forms';
import { checkAndUpdateElementDynamic } from '@angular/core/src/view/element';
import { DOCUMENT } from '@angular/common';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // ez az összekötés
  // url: 'http://localhost:3000';

  userData: object = {
    username: '',
    email: '',
    password: ''
  };

  datas: any;

  bejelentkezve: Boolean = false;
  regisztralva: Boolean = false;




  constructor(public http: Http) {
    this.getUser();

  }

  getUser() {
    this.http.get('http://localhost:3000', this.userData).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }

  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error:' + JSON.stringify(res.error));
    } else {
      this.datas = res;
    }
  }

  register() {
    this.http.post('http://localhost:3000/register', this.userData).subscribe(
      data => {
        console.log(this.userData);
        this.errorHandling(data);
        this.regisztralva = true;
        alert('Sikeres regisztráció!');
        // this.login();
      });
  }

  login() {
    this.http.post('http://localhost:3000/login', this.userData).subscribe(
      data => {
        console.log(this.userData);
        this.bejelentkezve = true;
        this.regisztralva = true;
        this.errorHandling(data);
      });
  }

  logout() {
    this.http.get('http://localhost:3000/logout').subscribe(
      data => {
        console.log(data);
        this.bejelentkezve = false;
        this.errorHandling(data);
      });
  }
  /*
    tooltip() {
      $(() => {
        $('[data-toggle="tooltip"]').tooltip()
      });
    }
    
    tooltip() {
      $('[data-toggle="tooltip"]').tooltip('show');
    }*/
}

