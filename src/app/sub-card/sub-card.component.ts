import { Component, OnInit } from '@angular/core';
import { SubStat } from './sub-stat.model';
import { SubStatsService } from './sub-stats.service';

@Component({
  selector: 'app-sub-card',
  templateUrl: './sub-card.component.html',
  styleUrls: ['./sub-card.component.scss']
})
export class SubCardComponent implements OnInit {

  constructor(private subStatsService: SubStatsService) { }
  subStats: Array<SubStat> = this.subStatsService.getSubStats();
  ngOnInit(): void {
  }

}
