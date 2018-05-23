import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageHistoryPage } from './page-history';

@NgModule({
  declarations: [
    PageHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(PageHistoryPage),
  ],
})
export class PageHistoryPageModule {}
