import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PratoRemovePage } from './prato-remove.page';

describe('PratoRemovePage', () => {
  let component: PratoRemovePage;
  let fixture: ComponentFixture<PratoRemovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoRemovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PratoRemovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
