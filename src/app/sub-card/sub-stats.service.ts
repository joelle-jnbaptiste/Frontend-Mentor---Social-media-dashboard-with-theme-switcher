import { Injectable } from '@angular/core';
import { SocialMedia } from '../social-media.enum';
import { SubStat } from './sub-stat.model';

@Injectable({
  providedIn: 'root'
})
export class SubStatsService {
  private tableSubStat: Array<SubStat> = [
    {
      socialMedia:SocialMedia.facebook,
      dailyStatType:'Page Views',
      dailyStat: '87',
      dailyStatPercentage:3,
      isDailyStatPositive:true
    },
    {
      socialMedia:SocialMedia.facebook,
      dailyStatType:'Likes',
      dailyStat: '52',
      dailyStatPercentage:2,
      isDailyStatPositive:false
    },
    {
      socialMedia:SocialMedia.instagram,
      dailyStatType:'Likes',
      dailyStat: '5462',
      dailyStatPercentage:2257,
      isDailyStatPositive:true
    },
    {
      socialMedia:SocialMedia.instagram,
      dailyStatType:'Profile Views',
      dailyStat: '52k',
      dailyStatPercentage:1375,
      isDailyStatPositive:true
    
    },
    {
      socialMedia:SocialMedia.twitter,
      dailyStatType:'Retweets',
      dailyStat: '117',
      dailyStatPercentage:303,
      isDailyStatPositive:true
    },
    {
      socialMedia:SocialMedia.twitter,
      dailyStatType:'Likes',
      dailyStat: '507',
      dailyStatPercentage:553,
      isDailyStatPositive:true
    },
    {
      socialMedia:SocialMedia.youtube,
      dailyStatType:'Likes',
      dailyStat: '107',
      dailyStatPercentage:19,
      isDailyStatPositive:false
    },
    {
      socialMedia:SocialMedia.youtube,
      dailyStatType:'Total Views',
      dailyStat: '1407',
      dailyStatPercentage:12,
      isDailyStatPositive:false
    },
  ];
  constructor() { }

  getSubStats(){
    return this.tableSubStat;
  }
}
