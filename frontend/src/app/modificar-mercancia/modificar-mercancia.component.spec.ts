import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMercanciaComponent } from './modificar-mercancia.component';

describe('ModificarMercanciaComponent', () => {
  let component: ModificarMercanciaComponent;
  let fixture: ComponentFixture<ModificarMercanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarMercanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
