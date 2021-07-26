import { SocialMedia } from "../social-media.enum";

export class SubStat {
    public socialMedia: SocialMedia | undefined ;
    public dailyStatType: string = '';
    public dailyStat: string = '';
    public dailyStatPercentage: number = 0;
    public isDailyStatPositive: boolean = true;
  }

  