import { Injectable } from '@angular/core';
import { UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizaGuard  {
  
  constructor( private authservice: AuthService, 
    private toast: ToastController,
    private router: Router){}
  
    canActivate(): 
    | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
        if(!this.authservice.IsLoggedIn()){
          this.showToast('Debe iniciar sesión!');
          this.router.navigate(['/login']);
          return false;
    }
       // logged in, so return true
      this.authservice.IsLoggedIn();
      return true;
}

async showToast(msg: any) {
const toast = await this.toast.create({
message: msg,
duration: 3000
});
toast.present();
}
  
}
