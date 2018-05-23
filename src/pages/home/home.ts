import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ResultPage} from '../result/result'; // added to route to this page
import {LoginPage} from '../login/login';
import { SignPage } from '../sign/sign';

import {PageHistoryPage} from '../page-history/page-history';

import {MostVisitedPage} from '../most-visited/most-visited';


// to retrive data import this libs

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: any; // routing to page result

  log : any;

  register : any;

  mostvisitedpages : any;
  pageHistoryUrls : any;

   flage:boolean = true;
  items : string[];
  temp : string[];
  constructor(public navCtrl: NavController) {
    this.generateItems();
   // linking to another page
   this.results = ResultPage;
    this.log = LoginPage;
   // firebase
   this.register = SignPage;
   this.mostvisitedpages = MostVisitedPage;
   this.pageHistoryUrls = PageHistoryPage;  
  }

  generateItems(){
    if(!this.flage){
      this.items = [
        'ahmed',
        'mido',
        'ahlan',
        'sahlan',
        'hamada',
        'ibrahim',
        'soltan',
        'zizo',
        'marzog',
        'mohamed',
        'mahasen',
        'mai',
        'madolna',

      ];
    }
   
  }


  // return items to search bar in a list
  getItems(ev:any){
    if(ev.target.value!=''){
      this.flage=false;
      this.generateItems();
      let serVal=ev.target.value;
      if(serVal && serVal.trim()!=''){
        this.items = this.items.filter((topic)=>{
          return (topic.toLocaleLowerCase().indexOf(serVal.toLowerCase())>-1);
        });
        if(this.items.length>5)
        this.items = this.items.slice(0,5); // display only 5 elements max
    }
    else this.flage=true;
    // end of scope
  }
  
}
}
