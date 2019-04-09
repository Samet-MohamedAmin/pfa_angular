import { Component, OnInit } from '@angular/core';
import { BranchItemInterface } from '../branch-item/branch-item.interface';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  branchList: BranchItemInterface[] = [];
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipiscing';

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 6; i++) {
      const branchItem: BranchItemInterface = {
        name: 'Génie Logiciel',
        image: 'assets/images/computer_01.jpg',
        imageAlt: 'GL_IMAGE',
        description: this.dummyText
      };

      this.branchList.push(branchItem);
    }
  }

}
