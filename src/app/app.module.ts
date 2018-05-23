import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import {AngularFireModule} from 'angularfire2';
//import {AngularFireDatabaseModule} from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ResultPage} from '../pages/result/result';
import {LoginPage} from '../pages/login/login';
import {SignPage} from '../pages/sign/sign';
import {PageHistoryPage} from '../pages/page-history/page-history';
import {MostVisitedPage} from '../pages/most-visited/most-visited';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultPage,
    LoginPage,
    SignPage,
    PageHistoryPage,
    MostVisitedPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    /* AngularFireModule.initializeApp({
      apiKey: "AIzaSyBZliXos8gAYb6Ocz7a2LZ-vgSllrENeeE",
    authDomain: "ionicdb-f3b87.firebaseapp.com",
    databaseURL: "https://ionicdb-f3b87.firebaseio.com",
    storageBucket: "ionicdb-f3b87.appspot.com",
    messagingSenderId: "273989716659",

    }), // adding firebase
    AngularFireDatabaseModule,*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultPage,
    LoginPage,
    SignPage,
    PageHistoryPage,
    MostVisitedPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
   // AngularFireDatabaseModule, // to insert into fire base
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {



  
}
