import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-billSplitter',
  templateUrl: 'billSplitter.html'
})
export class Splitter {
 billAmount: string;
 numberOfPeople: string;
 tipPercent: string;
 tipAmount: number;
 total: number;
 shareAmount: number

  constructor(public alertCtrl: AlertController) {
  }


 split(){

if(this.billAmount == ""){
  this.billAmountAlert();
  return false;
}
if(/\D/.test(this.billAmount)){
  this.billAmountAlert();
  return false;
}
if(isNaN(parseFloat(this.billAmount))){
  this.billAmountAlert();
  return false;
}
if(this.numberOfPeople == ""){
this.numPeopleAlert();
return false
}
if(/\D/.test(this.numberOfPeople)){
  this.numPeopleAlert();
  return false;
}
if(isNaN(parseFloat(this.numberOfPeople))){
  this.numPeopleAlert();
  return false;
}
if(this.tipPercent == ""){
  this.tipAlert()
}
if(/\D/.test(this.tipPercent)){
  this.tipAlert();
  return false;
}
if(isNaN(parseFloat(this.tipPercent))){
  this.tipAlert();
  return false;
}

this.tipAmount = parseFloat(this.billAmount) * ((parseFloat(this.tipPercent)) / 100)

this.total = this.tipAmount + parseFloat(this.billAmount);

this.shareAmount = (parseFloat(this.billAmount) + this.tipAmount) / parseFloat(this.numberOfPeople);
 }





  billAmountAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please enter a number for the bill amount',
      buttons: ['OK']
    });
    alert.present()
  };
  numPeopleAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please enter the number of people splitting the bill',
      buttons: ['OK']
    });
    alert.present()
  };
  tipAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please enter the percent you want to tip',
      buttons: ['OK']
    });
    alert.present()
  };


}
