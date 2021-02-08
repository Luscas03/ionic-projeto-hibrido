import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteAtualizarPage } from './cliente-atualizar.page';

describe('ClienteAtualizarPage', () => {
  let component: ClienteAtualizarPage;
  let fixture: ComponentFixture<ClienteAtualizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAtualizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteAtualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
