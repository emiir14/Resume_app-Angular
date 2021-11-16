import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  text = `If you like what you saw do not hesitate to contact me!`;

  items = [
    {
      text: '3517887715',
      url:
        'https://api.whatsapp.com/send?phone=5493517887715&text=I%20want%20to%20find%20out%20about%20your%20products',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    },
    {
      text: 'emirderespaldo@gmail',
      url: 'mailto:emirderespaldo@gmail.com',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png',
    },
    {
      text: '/emirale/',
      url: 'https://www.linkedin.com/in/emirale/',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg',
    },
    {
      text: 'emiir14',
      url: 'https://github.com/emiir14',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    },
    {
      text: 'Famatina 92',
      url: 'https://goo.gl/maps/2cQ6Y73NF5Xiiq4E7',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
