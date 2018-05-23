import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// to insert data in firebase use this libs
//import { AngularFireDatabaseModule,AngularFireList } from 'angularfire2/database';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {HttpModule} from '@angular/http';

/**
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {
 // userList : AngularFireList<any[]>; // insert data
 // public db:AngularFireDatabase 
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    //this.userList = db.list('/people')
    
  }
  /*myarray=[]
  createUser(fname, lname,user,gender,email,password){
    this.myarray =[fname,lname,user,gender,email,password];
    this.userList.push(this.myarray).then(newp=>{
      this.navCtrl.push(HomePage);
      alert('done')
    },error=>{alert(error)});
  }*/

  createUser(fname,lname,user,gender,email,password){

    var registered = false;
    var Browser_id =window.navigator.product ;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  let data = {
            'Fname': fname,
            'Lname': lname,
            'User': user,
            'Gender':gender,
            'Email':email,
            'Password':password,
            'registered':registered,
            'Browser_id' :Browser_id,

        };
        
        //let headers = {'Content-Type': 'application/json'};

        const req = this.http.post('http://localhost:8080/test', data)
      .subscribe(
        res => {
          console.log(res);
          alert('success');
        },
        err => {
          console.log("Error occured");
          alert(err)
        }
      );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

}
