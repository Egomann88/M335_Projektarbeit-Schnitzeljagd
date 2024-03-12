import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabSettingsPage } from './tabSettings.page';
import {StorageService} from "../../services/storage.service";
import {MockStorageService} from "../../mocks/MockStorageService";

describe('TabSettingsPage', () => {
  let component: TabSettingsPage;
  let fixture: ComponentFixture<TabSettingsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabSettingsPage],
      imports: [IonicModule.forRoot()],
      providers: [
        {provide: StorageService, useClass: MockStorageService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
