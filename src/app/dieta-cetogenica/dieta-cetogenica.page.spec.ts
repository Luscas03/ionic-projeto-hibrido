import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietaCetogenicaPage } from './dieta-cetogenica.page';

describe('DietaCetogenicaPage', () => {
  let component: DietaCetogenicaPage;
  let fixture: ComponentFixture<DietaCetogenicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaCetogenicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietaCetogenicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
