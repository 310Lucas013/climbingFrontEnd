import { Component, OnInit } from '@angular/core';
import {Competition} from "../shared/models/Competition";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions = [new Competition(1, 'TriggerFinger 2016', '02/02/2016',
    '07/07/2016', 12),
    new Competition(2, 'TriggerFinger 2016', '02/02/2016',
      '07/07/2016', 14)];

  constructor() { }

  ngOnInit() {
  }

}
