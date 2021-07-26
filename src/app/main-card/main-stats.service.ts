import { Injectable } from '@angular/core';
import { SocialMedia } from '../social-media.enum';
import { MainStat } from './main-stat.model';

@Injectable({
  providedIn: 'root'
})
export class MainStatsService {

  constructor() { }

  private tablemainStat: Array<MainStat> = [
    {
      socialMedia:SocialMedia.facebook,
      accountName:'@nathanf',
      accountCount: '1987',
      accountCountType:'Followers',
      dailyStat:12,
      isDailyStatPositive:true
    },
    {
      socialMedia:SocialMedia.twitter,
      accountName:'@nathanf',
      accountCount: '1044',
      accountCountType:'Followers',
      dailyStat:99,
      isDailyStatPositive:true
    },
    {
      socialMedia:SocialMedia.instagram,
      accountName:'@realnathanf',
      accountCount: '11k',
      accountCountType:'Followers',
      dailyStat:1099,
      isDailyStatPositive:true
    },
    {
      socialMedia:SocialMedia.youtube,
      accountName:'Nathan F.',
      accountCount: '8239',
      accountCountType:'Subscribers',
      dailyStat:144,
      isDailyStatPositive:false
    }
  ];

  getMainStats(){
    return this.tablemainStat;
  }
}
