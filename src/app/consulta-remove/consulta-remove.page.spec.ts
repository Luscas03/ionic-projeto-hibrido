import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultaRemovePage } from './consulta-remove.page';

describe('ConsultaRemovePage', () => {
  let component: ConsultaRemovePage;
  let fixture: ComponentFixture<ConsultaRemovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaRemovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaRemovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
