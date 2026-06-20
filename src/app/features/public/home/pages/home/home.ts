import { Component } from '@angular/core';

import { Hero } from '../../sections/hero/hero';
import { NotificationTicker } from '../../sections/notification-ticker/notification-ticker';
import { AboutUs } from '../../sections/about-us/about-us';
import { ChiefMinister } from '../../sections/chief-minister/chief-minister';
import { GlobalPresence } from '../../sections/global-presence/global-presence';
import { SocialNews } from '../../sections/social-news/social-news';
import { HeritageGrid } from '../../sections/heritage-grid/heritage-grid';
import { GovernmentPartners } from '../../sections/government-partners/government-partners';
import { Gallery } from '../../sections/gallery/gallery';
import { Newsletter } from '../../sections/newsletter/newsletter';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    NotificationTicker,
    AboutUs,
    ChiefMinister,
    GlobalPresence,
    SocialNews,
    HeritageGrid,
    GovernmentPartners,
    Gallery,
    Newsletter
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}