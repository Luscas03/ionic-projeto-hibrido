import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginRecuperarPage } from './login-recuperar.page';

describe('LoginRecuperarPage', () => {
  let component: LoginRecuperarPage;
  let fixture: ComponentFixture<LoginRecuperarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRecuperarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginRecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
