import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertService } from 'src/services/AlertService';
import { Task } from 'src/models/task';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  task?: Task;
  isSupported = false;
  barcodes: Barcode[] = [];
  correctBarcodeValue = 'Freundschaft ist Magie';

  constructor(private alertService: AlertService, private scavengerHuntService: ScavengerHuntService) { }

  ngOnInit() {
    this.task = this.scavengerHuntService.currentTask;

    BarcodeScanner.isSupported().then((res) => {
      this.isSupported = res.supported;
    });
  }

  async completed() {
    await this.scavengerHuntService.completeTask()
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      await this.alertService.PresentAlert('Permission denied', ['OK'], 'Please grant camera permission to use the barcode scanner.');
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);

    await this.correctBarcode();
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async correctBarcode() {
    this.barcodes.forEach(barcode => {
      if (barcode.rawValue === this.correctBarcodeValue) this.completed();
    });
  }
}
