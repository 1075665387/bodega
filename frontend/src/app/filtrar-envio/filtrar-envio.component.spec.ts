import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarEnvioComponent } from './filtrar-envio.component';

describe('FiltrarEnvioComponent', () => {
  let component: FiltrarEnvioComponent;
  let fixture: ComponentFixture<FiltrarEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
