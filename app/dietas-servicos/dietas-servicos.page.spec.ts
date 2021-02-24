import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietasServicosPage } from './dietas-servicos.page';

describe('DietasServicosPage', () => {
  let component: DietasServicosPage;
  let fixture: ComponentFixture<DietasServicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietasServicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietasServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
