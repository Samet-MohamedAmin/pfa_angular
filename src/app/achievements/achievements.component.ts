import { Component, OnInit } from '@angular/core';
import { IndicatorInterface, IndicatorColor, COLOR_LIST } from './indicator/indicator.interface';
import { SharedService } from '@4c-shared/shared.service';
import { IndicatorService } from './indicator/indicator.service';

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
  iconBaseUrl:string = 'assets/icons/indicators/';
  iconExtension: string = '.png';
  iconList: string[] = ['indicator_01_certified_students',
                        'indicator_02_certified_teachers',
                        'indicator_03_formed_females',
                        'indicator_04_formed_students',
                        'indicator_05_formed_teachers',
                        'indicator_06_total_actions',
                        'indicator_07_training_planified',
                        'indicator_08_training_realized']
     
  constructor(private indicatorService:IndicatorService){
    this.indicatorService.getAllIndicators()
    .subscribe((indicators: {})=>{
      console.log(indicators);
      const keyList: string[] = Object.keys(indicators).sort();
      keyList.forEach((key: string)=>{
        if(!key.startsWith('_')) {
          const indicator: IndicatorInterface = this.mapIndicator(key,
                                                                  indicators[key],
                                                                  this.indicatorList.length);
          this.indicatorList.push(indicator);
        }
      });
      console.log(this.indicatorList);
    })
  }                      
  /**
   * initialize `indicatorList`
   */
  ngOnInit() {
  }

  mapIndicator(indicatorName: string,
              indicatorValue: string,
              iconIndex: number): IndicatorInterface{
    const indicator: IndicatorInterface = {
      name: indicatorName,
      value: indicatorValue,
      goalCurrent: {value: '50', dueTo: '2019'},
      goalNext: '80 pour 2020',
      color: COLOR_LIST[iconIndex],
      icon: this.iconBaseUrl + this.iconList[iconIndex] + this.iconExtension
    }
    return indicator;
  }

}

