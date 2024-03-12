// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import {getTestBed} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {StorageService} from "./services/storage.service";
import {MockStorageService} from "./mocks/MockStorageService";

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  [BrowserDynamicTestingModule, HttpClientTestingModule],
  platformBrowserDynamicTesting(),
);

getTestBed().configureTestingModule(
  {
    providers: [
      {provide: StorageService, useClass: MockStorageService} // Provide the mock class
    ]
  } // Provide the mock class
)
