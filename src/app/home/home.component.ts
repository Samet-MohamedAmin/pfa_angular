import { Component, OnInit} from '@angular/core';

/**
 * content to be presented in the home page
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  /**
   * random text.
   * used for developement purpose only.
   */
  text1 = 'Améliorez votre employabilité grâce un nos programmes de conseil, d’accompagnement, de formation, de certification et de réseautage ';
  text2='Participez aux activités et séminaires d’ouverture sur l’environnement socio-économique  '
  /**
   * contains search value in the search input
   */
  searchValue = '';

}


