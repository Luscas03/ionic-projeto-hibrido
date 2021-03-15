import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicosUserPage } from './servicos-user.page';

describe('ServicosUserPage', () => {
  let component: ServicosUserPage;
  let fixture: ComponentFixture<ServicosUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicosUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
