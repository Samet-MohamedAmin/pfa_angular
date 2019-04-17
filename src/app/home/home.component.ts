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
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit habitant vulputate ultrices,\
  cum ut in duis magna fames habitasse congue senectus.';
  /**
   * contains search value in the search input
   */
  searchValue = '';

}


