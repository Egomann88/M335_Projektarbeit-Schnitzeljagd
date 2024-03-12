import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  async presentToast(message: string, color: string = "light", duration: number = 2000) {
    this.toastCtrl.create({
      message,
      duration,
      color: color,
    }).then(toast => toast.present());
  }
}
