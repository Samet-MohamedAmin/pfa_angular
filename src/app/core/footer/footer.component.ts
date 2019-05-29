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
  about = `Le centre 4C-Insat représente le maillon entre l'institut et l'entreprise. Il offre des formations en collaboration avec les acteurs socio-économiques`;

  constructor() { }
}
