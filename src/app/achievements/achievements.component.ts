import { Component, OnInit } from '@angular/core';
import { IndicatorInterface, IndicatorColor, COLOR_LIST } from './indicator/indicator.interface';
import { SharedService } from '@4c-shared/shared.service';

/**
 * AchievementsComponent
 */
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  indicatorList: IndicatorInterface[] = [];
  colorList: IndicatorColor[] = COLOR_LIST;
  iconList: string[] = ['all_inbox',
                        'check_circle',
                        'donut_large',
                        'archive',
                        'cached',
                        'done',
                        'favorite',
                        'sentiment_satisfied_alt',
                        'star',
                        'school',
                        'mood']
                        
  /**
   * initialize `indicatorList`
   */
  ngOnInit() {
    for(let i=0; i<6; i++){
      const indicator: IndicatorInterface = {
        name: 'Dummy Indicator',
        value: '20',
        goalCurrent: {value: '50', dueTo: '2019'},
        goalNext: '80 par 2020',
        color: SharedService.getRandomObject(COLOR_LIST),
        icon: SharedService.getRandomObject(this.iconList)
      }
      this.indicatorList.push(indicator);
    }
  }

}

