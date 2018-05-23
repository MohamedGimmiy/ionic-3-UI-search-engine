import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostVisitedPage } from './most-visited';

@NgModule({
  declarations: [
    MostVisitedPage,
  ],
  imports: [
    IonicPageModule.forChild(MostVisitedPage),
  ],
})
export class MostVisitedPageModule {}
