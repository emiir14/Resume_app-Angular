import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  text = `If you liked what you saw dont doubt on contact me! Hover to see more,
  click to send`;

  items = [
    {
      hover: 'hover',
      stuff: 'stuff',
      text: '3517887715',
      url:
        'https://api.whatsapp.com/send?phone=5493517887715&text=I%20want%20to%20find%20out%20about%20your%20products',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    },
    {
      hover: 'hover',
      stuff: 'stuff',
      text: 'emirderespaldo@gmail',
      url: 'mailto:emirderespaldo@gmail.com',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/45/New_Logo_Gmail.svg',
    },
    {
      hover: 'hover',
      stuff: 'stuff',
      text: '/emirale/',
      url: 'https://www.linkedin.com/in/emirale/',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg',
    },
    {
      hover: 'hover',
      stuff: 'stuff',
      text: 'emiir14',
      url: 'https://github.com/emiir14',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    },
    {
      hover: 'hover',
      stuff: 'stuff',
      text: 'Famatina 92',
      url: 'https://goo.gl/maps/2cQ6Y73NF5Xiiq4E7',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Maps_icon.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
