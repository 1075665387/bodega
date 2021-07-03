import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarMercanciaComponent } from './filtrar-mercancia.component';

describe('FiltrarMercanciaComponent', () => {
  let component: FiltrarMercanciaComponent;
  let fixture: ComponentFixture<FiltrarMercanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarMercanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
