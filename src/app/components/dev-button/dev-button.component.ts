import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskDetails} from "../../../models/taskDetails";

@Component({
  selector: 'app-dev-button',
  templateUrl: './dev-button.component.html',
  styleUrls: ['./dev-button.component.scss'],
})
export class DevButtonComponent {

  constructor() { }

  @Output() devFunction = new EventEmitter<string>();

  executeDevFunction(){
    this.devFunction.emit();
  }

}
