import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteListaPage } from './cliente-lista.page';

describe('ClienteListaPage', () => {
  let component: ClienteListaPage;
  let fixture: ComponentFixture<ClienteListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
