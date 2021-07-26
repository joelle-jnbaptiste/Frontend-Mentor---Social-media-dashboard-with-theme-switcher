import { SocialMedia } from "../social-media.enum";

export class MainStat {
    public socialMedia: SocialMedia | undefined ;
    public accountName: string = '';
    public accountCount: string = '';
    public accountCountType: string = '';
    public dailyStat: number = 0;
    public isDailyStatPositive: boolean = true;
  }

  