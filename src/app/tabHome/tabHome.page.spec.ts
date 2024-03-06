import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabHomePage } from './tabHome.page';

describe('TabHomePage', () => {
  let component: TabHomePage;
  let fixture: ComponentFixture<TabHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabHomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
