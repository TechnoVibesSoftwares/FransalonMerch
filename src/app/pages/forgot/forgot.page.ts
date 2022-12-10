import { Router } from '@angular/router';
import { toastController } from '@ionic/core';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  Router: any;

  constructor(private toastController:ToastController, private router:Router) { }

  login = {
    email:'',
    pass:'',
    confirmpas:''
  };
  ngOnInit() {
  }
  logini(){
     
    {
      if((this.login.email=='' || this.login.pass==''||this.login.pass != this.login.confirmpas)){
        //alert('login success');
        alert('login failed');
        this.presentToast('Password not match');
         
      }
      else{
        alert('Login sucess');
        this.router.navigateByUrl('/home');
        
      }
    }
  }


 async presentToast(msg) {

  const toast = await this.toastController.create({
    message: msg,
    duration: 2000,

  });

  await toast.present();
}

}
