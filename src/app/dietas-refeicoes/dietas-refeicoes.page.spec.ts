import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietasRefeicoesPage } from './dietas-refeicoes.page';

describe('DietasRefeicoesPage', () => {
  let component: DietasRefeicoesPage;
  let fixture: ComponentFixture<DietasRefeicoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietasRefeicoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietasRefeicoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
