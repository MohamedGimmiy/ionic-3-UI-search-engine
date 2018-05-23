import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ResultPage } from '../pages/result/result';
import  {LoginPage } from '../pages/login/login';
import { SignPage } from '../pages/sign/sign';
import { HomePage } from '../pages/home/home';
import { PageHistoryPage } from '../pages/page-history/page-history';
import { MostVisitedPage } from '../pages/most-visited/most-visited';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //-------------------- default page (root) -------------------//
  rootPage:any = HomePage;
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

