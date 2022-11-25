import { Component, OnInit } from '@angular/core';
import {  MenuController,NavController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-sp-qr-scanner',
  templateUrl: './sp-qr-scanner.page.html',
  styleUrls: ['./sp-qr-scanner.page.scss'],
})
export class SpQrScannerPage implements OnInit {
  scanActive = false;
  textOutput: any ='Output';


  constructor(public menu: MenuController,private nav: NavController) {}
  ngOnInit() {}


  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startScanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      this.scanActive = true;
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.scanActive = false;
        alert(result.content); //The QR content will come out here
        //Handle the data as your heart desires
        this.textOutput = result.content;
      } else {
        alert('NO DATA FOUND!');
      }
    } else {
      alert('NOT ALLOWED!');
    }
  }


  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }
  ionViewDidEnter() {
    // Use the id to enable/disable the menus
    this.menu.enable(false, 'main');
    this.menu.enable(true, 'main1');
  }
}
