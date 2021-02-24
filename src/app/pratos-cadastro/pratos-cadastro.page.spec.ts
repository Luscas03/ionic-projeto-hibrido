import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PratosCadastroPage } from './pratos-cadastro.page';

describe('PratosCadastroPage', () => {
  let component: PratosCadastroPage;
  let fixture: ComponentFixture<PratosCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratosCadastroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PratosCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
