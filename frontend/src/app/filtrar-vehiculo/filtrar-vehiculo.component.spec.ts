import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarVehiculoComponent } from './filtrar-vehiculo.component';

describe('FiltrarVehiculoComponent', () => {
  let component: FiltrarVehiculoComponent;
  let fixture: ComponentFixture<FiltrarVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
