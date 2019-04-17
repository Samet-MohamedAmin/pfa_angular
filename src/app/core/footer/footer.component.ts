import { Component } from '@angular/core';

/**
 * page footer
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  /**
   * list of footer links
   */
  linkList: string[] = [
    'www.4c.tn',
    'www.mes.tn',
    'www.insat.rnu.tn'
  ];

  /**
   * dummy text for developping only
   */
  dummyText = `Lorem ipsum dolor sit amet consectetur adipiscing elit, conubia 
                curabitur arcu duis quis purus, vel velit nunc aptent lobortis accumsan.`;

  constructor() { }
}
