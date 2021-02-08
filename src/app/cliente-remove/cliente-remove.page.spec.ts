import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteRemovePage } from './cliente-remove.page';

describe('ClienteRemovePage', () => {
  let component: ClienteRemovePage;
  let fixture: ComponentFixture<ClienteRemovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteRemovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteRemovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
