import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userName = '';
  todos :any;

  constructor(private authService: AuthService,private router: Router,public menuCtrl: MenuController) { }

  afterLoggedIn(){
    this.authService.getTodos().subscribe(
      (data) => {
        console.log('Milgya Bhai : ',data);
        this.todos = data.name;
      },
      (error) => {
        alert('failed fetch todos');
      }
    );
  }


  logout(){
    this.authService.getLogout();
    this.router.navigateByUrl('/login');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }


}
