import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarConductorComponent } from './filtrar-conductor.component';

describe('FiltrarConductorComponent', () => {
  let component: FiltrarConductorComponent;
  let fixture: ComponentFixture<FiltrarConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
