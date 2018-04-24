import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-messaging-service',
  templateUrl: './messaging-service.component.html',
  styleUrls: ['./messaging-service.component.css']
})
export class MessagingServiceComponent implements OnInit {

  /*keys: Array<string> = ['id', 'üzenet', 'feladó', 'címzett', 'olvasva'];
  lastKey: string = '';
  sorts: any = {};
  order: number = 1;

 url: 'http://localhost:3000/message';*/

  // új adat, amit fel akarok vinni
  newMessage: object = {
    text: '',
    sender: '',
    mailingTo: '',
    read: Date.now
  };

  /* ilyen egy message obj.
    message = {
      _id: 5ada336edfd1b3095840a683,
      text: 'Holnap mikor kezdünk?',
      sender: 'Német Árpád',
      mailingTo: 'Kocsis János',
      read: 2018 - 04 - 20 T18: 37: 34.204Z,
      createdAt: 2018 - 04 - 20 T18: 37: 34.209Z,
      updatedAt: 2018 - 04 - 20 T18: 37: 34.209Z,
      __v: 0
    };
  */

  // tömb a message objektumokkal
  datas: any;

  // adott message objektum, amit szerkeszthetünk
  message: object = {
    _id: '',
    text: '',
    sender: '',
    mailingTo: '',
    read: new Date,
    createdAt: new Date,
    updatedAt: new Date
  };

  // feltölti a datast
  constructor(public http: Http) {
    this.getAll();
  }


  ngOnInit() { }

  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error:' + JSON.stringify(res.error));
    } else {
      this.datas = res;
      console.log(this.datas);
    }
  }

  // feltölti a datas tömböt, benne a messages objektumokkal
  getAll() {
    this.http.get('http://localhost:3000/message').subscribe(
      data => {
        console.log(data);
        this.datas = data;
        this.errorHandling(data);
      });
  }

  // elküldjük az új adatokat a formból
  create() {
    this.http.post('http://localhost:3000/message', this.newMessage).subscribe(
      data => {
        this.errorHandling(data);
        this.getAll();
        this.newMessage = {};
      });
  }

  update() {
    this.http.put(`http://localhost:3000/message/${this.message['_id']}`, this.message).subscribe(
      data => {
        this.errorHandling(data);
        this.getAll();
      });
  }

  updateByModal(id) {
    const chosen = this.datas.filter(item => item._id === id)[0];
    this.message = Object.assign({}, chosen);
  }

  delete(id) {
    if (confirm('Biztosan törölni szeretné?')) {
      this.http.delete(`http://localhost:3000/message/${id}`).subscribe(
        data => {
          this.errorHandling(data);
          console.log(data);
          this.getAll();
        });
    }
  }


  /*
    sortTable(key): void {
      for (var k in this.sorts) {
        this.sorts[k] = '';
      }
      if (this.lastKey === key) {
        this.order *= -1;
      } else {
        this.order = 1;
      }
  
      this.lastKey = key;
      for (let i = 0; i < this.datas.length; i++) {
        this.datas.sort((a, b) => {
          return a[i].sender.toString().localeCompare(b[i].sender.toString()) * this.order;
        });
      }
    }*/
}
