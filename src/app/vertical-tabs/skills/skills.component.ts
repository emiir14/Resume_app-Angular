import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {

  technologies = [
    'Angular 9',
    'Javascript',
    'Bootstrap 4',
    'Github',
    'Typescript',
    'CSS',
  ];

  constructor() {}

  ngOnInit(): void {}
}
