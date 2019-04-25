import { Component, OnInit, Input } from '@angular/core';
import { IndicatorInterface } from './indicator.interface';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
  @Input() indicator: IndicatorInterface;

  ngOnInit() {
  }

}
