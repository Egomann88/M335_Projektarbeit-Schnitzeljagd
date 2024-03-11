import {Component, Input, OnInit} from '@angular/core';
import {TaskDetails} from "../../../models/taskDetails";

@Component({
  selector: 'app-dev-button',
  templateUrl: './dev-button.component.html',
  styleUrls: ['./dev-button.component.scss'],
})
export class DevButtonComponent {

  constructor() { }

  @Input() devFunction!: () => void;

  executeDevFunction(){
    this.devFunction();
  }

}
