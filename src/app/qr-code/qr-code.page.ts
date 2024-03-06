import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertService } from 'src/services/AlertService';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    BarcodeScanner.isSupported().then((res) => {
      this.isSupported = res.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.alertService.PresentAlert('Permission denied', ['OK'], 'Please grant camera permission to use the barcode scanner.');
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  scanCode() {
    console.log("Scanning code");
  }
}
