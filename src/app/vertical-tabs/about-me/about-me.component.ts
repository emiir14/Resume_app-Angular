import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  personalData = [
    'Name: Emir Ale',
    'Age: 28',
    'City: Cordoba',
    'Hotel: Trivago',
  ];

  constructor() {}

  ngOnInit(): void {}
}
