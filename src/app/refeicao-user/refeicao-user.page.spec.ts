import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefeicaoUserPage } from './refeicao-user.page';

describe('RefeicaoUserPage', () => {
  let component: RefeicaoUserPage;
  let fixture: ComponentFixture<RefeicaoUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefeicaoUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefeicaoUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
