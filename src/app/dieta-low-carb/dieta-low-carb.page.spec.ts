import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietaLowCarbPage } from './dieta-low-carb.page';

describe('DietaLowCarbPage', () => {
  let component: DietaLowCarbPage;
  let fixture: ComponentFixture<DietaLowCarbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaLowCarbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietaLowCarbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
