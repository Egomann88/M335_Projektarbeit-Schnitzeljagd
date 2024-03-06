import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../Services/storage.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private storageService: StorageService) {
    this.testString = ""
  }

  testString: string;

  async ngOnInit() {
    await this.loadNameFromStorage()
  }

  async saveNameToStorage() {
    // set a key/value
    await this.storageService.set('name', this.testString);
  }

  async loadNameFromStorage() {
    // Or to get a key/value pair
    this.testString = await this.storageService.get('name');
  }

}
