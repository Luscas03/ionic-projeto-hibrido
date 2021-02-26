import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutoCadastroPage } from './produto-cadastro.page';

describe('ProdutoCadastroPage', () => {
  let component: ProdutoCadastroPage;
  let fixture: ComponentFixture<ProdutoCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoCadastroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
