import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietaVisualizarPage } from './dieta-visualizar.page';

describe('DietaVisualizarPage', () => {
  let component: DietaVisualizarPage;
  let fixture: ComponentFixture<DietaVisualizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaVisualizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietaVisualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
