import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MainStat } from './main-stat.model';
import { MainStatsService } from './main-stats.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {

  constructor(private mainStatService: MainStatsService, private dom: DomSanitizer) { }

  mainStat: Array<MainStat> = this.mainStatService.getMainStats();

  ngOnInit(): void {
  }


}
