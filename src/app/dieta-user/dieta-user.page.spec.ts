import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietaUserPage } from './dieta-user.page';

describe('DietaUserPage', () => {
  let component: DietaUserPage;
  let fixture: ComponentFixture<DietaUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietaUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
