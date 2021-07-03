import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMercanciaComponent } from './crear-mercancia.component';

describe('CrearMercanciaComponent', () => {
  let component: CrearMercanciaComponent;
  let fixture: ComponentFixture<CrearMercanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMercanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
