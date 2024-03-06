import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root', // This specifies that the service is provided at the root level
})
export class AlertService {
  constructor(private alertCtrl: AlertController) { }

  // can't use AlertInput Interface because it causes to much trouble
  async PresentAlert(
    header: string,
    buttons: string[] | AlertButton[],
    message?: string,
    inputs?: any
  ) {
    // if buttons are not provided, default to OK
    if (!buttons || buttons.length === 0) {
      buttons = [{
        text: 'OK',
      }];
    }

    // if buttons are strings, convert to AlertButton
    if (buttons && buttons.length > 0 && typeof buttons[0] === 'string') {
      buttons = buttons.map((text) => {
        return {
          text: text as string,
        };
      });
    }

    // create alert
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      inputs: inputs,
      buttons: buttons,
    });

    await alert.present();
  }

  openErrorAlert(msg: string) {
    this.PresentAlert('Error', ['OK'], msg);
  } 
}

// https://ionicframework.com/docs/api/alert#alertbutton
type AlertButtonOverlayHandler = boolean | void | { [key: string]: any };

interface AlertButton {
  text: string;
  role?: 'cancel' | 'destructive' | string;
  cssClass?: string | string[];
  id?: string;
  htmlAttributes?: { [key: string]: any };
  handler?: (
    value: any
  ) => AlertButtonOverlayHandler | Promise<AlertButtonOverlayHandler>;
}
