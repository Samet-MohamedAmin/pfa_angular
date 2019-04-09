import { Component, OnInit, Input } from '@angular/core';
import { BranchItemInterface } from './branch-item.interface';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.css']
})
export class BranchItemComponent implements OnInit {

  @Input() branch:BranchItemInterface;

  constructor() { }

  ngOnInit() {
  }

}
