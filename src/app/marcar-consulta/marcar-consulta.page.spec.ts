import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcarConsultaPage } from './marcar-consulta.page';

describe('MarcarConsultaPage', () => {
  let component: MarcarConsultaPage;
  let fixture: ComponentFixture<MarcarConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcarConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcarConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
