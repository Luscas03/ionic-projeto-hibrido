import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilAtualizarPage } from './perfil-atualizar.page';

describe('PerfilAtualizarPage', () => {
  let component: PerfilAtualizarPage;
  let fixture: ComponentFixture<PerfilAtualizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAtualizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilAtualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
