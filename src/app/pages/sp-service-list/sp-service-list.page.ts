import { Component, OnInit } from '@angular/core';
import {  MenuController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-sp-service-list',
  templateUrl: './sp-service-list.page.html',
  styleUrls: ['./sp-service-list.page.scss'],
})
export class SpServiceListPage implements OnInit {

  constructor(public menu: MenuController,private nav: NavController ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    // Use the id to enable/disable the menus
    this.menu.enable(false, 'main');
    this.menu.enable(true, 'main1');
  }
}
