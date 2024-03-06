import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {AlertService} from "../../services/AlertService";

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
})
export class TaskHeaderComponent  implements OnInit {

  @Input() title: string = 'Kein Titel definiert.';
  constructor(private alertService: AlertService) { }

  ngOnInit() {}

  async dismiss() {
    console.log('Dismissed');

    const handler = (data: any) => {
      window.location.href = '/';
    }

    this.alertService.PresentAlert(
      'Lauf Abbrechen',
      [
        {
          text: 'Ja',
          role: 'cancel',
          handler,
        },
        {
          text: 'Nein',
        },
      ],
      'Sind Sie sicher, dass Sie den Lauf beenden möchten? Sie werden trotzdem eingetragen.',
      []
    );
  }

}
