import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png',
    'https://camo.githubusercontent.com/a1bd25907fece453efea35385a9252fc10a12258/687474703a2f2f7777772e747970657363726970746c616e672e6f72672f6173736574732f696d616765732f69636f6e732f7361666172692d70696e6e65642d7461622e737667',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/1200px-HTML5_logo_black.svg.png',
  ];

  technologies = [
    'Angular 9',
    'Javascript',
    'Bootstrap 4',
    'Github',
    'Typescript',
    'CSS',
    'HTML 5',
  ];

  constructor() {}

  ngOnInit(): void {}
}
