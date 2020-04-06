import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    art: new FormControl(''),
    message: new FormControl(''),
  });
  constructor(private http: HttpClient) {}

  onSubmit() {
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.contactForm.value.name)
      .append('email', this.contactForm.value.email)
      .append('art', this.contactForm.value.art)
      .append('message', this.contactForm.value.message);
    this.http
      .post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .subscribe(
        (res) => {},
        (err) => {
          if (err instanceof ErrorEvent) {
            alert('Something went wrong when sending your message.');
            console.log(err.error.message);
          } else {
            if (err.status === 200) {
              alert('Your message has been sent!');
            } else {
              alert('Something went wrong when sending your message.');
              console.log('Error status:');
              console.log(err.status);
              console.log('Error body:');
              console.log(err.error);
            }
          }
        }
      );
  }
  ngOnInit(): void {}
}
