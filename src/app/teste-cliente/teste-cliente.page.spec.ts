import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TesteClientePage } from './teste-cliente.page';

describe('TesteClientePage', () => {
  let component: TesteClientePage;
  let fixture: ComponentFixture<TesteClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TesteClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
