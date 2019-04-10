import { Component, OnInit, Input } from '@angular/core';
import { TrainingItemInterface } from './training-item.interface';

@Component({
  selector: 'app-training-item',
  templateUrl: './training-item.component.html',
  styleUrls: ['./training-item.component.css']
})
export class TrainingItemComponent implements OnInit {
  @Input() training : TrainingItemInterface;

  constructor() { }

  ngOnInit() {
  }

}
