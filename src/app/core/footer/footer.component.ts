import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  linkList = [
    'www.4c.tn',
    'www.mes.tn',
    'www.insat.rnu.tn'
  ];

  dummyText = `Lorem ipsum dolor sit amet consectetur adipiscing elit, conubia 
                curabitur arcu duis quis purus, vel velit nunc aptent lobortis accumsan.`;

  constructor() { }

  ngOnInit() {
  }

}
