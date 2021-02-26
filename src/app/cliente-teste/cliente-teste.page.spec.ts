import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteTestePage } from './cliente-teste.page';

describe('ClienteTestePage', () => {
  let component: ClienteTestePage;
  let fixture: ComponentFixture<ClienteTestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteTestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteTestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
