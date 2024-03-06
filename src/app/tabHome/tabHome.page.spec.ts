import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabHomePage } from './tabHome.page';

describe('TabHomePage', () => {
  let component: TabHomePage;
  let fixture: ComponentFixture<TabHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabHomePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
