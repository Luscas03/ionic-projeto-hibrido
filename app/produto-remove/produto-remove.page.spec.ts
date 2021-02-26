import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutoRemovePage } from './produto-remove.page';

describe('ProdutoRemovePage', () => {
  let component: ProdutoRemovePage;
  let fixture: ComponentFixture<ProdutoRemovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoRemovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoRemovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
