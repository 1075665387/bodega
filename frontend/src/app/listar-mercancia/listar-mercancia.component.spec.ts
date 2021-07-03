import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMercanciaComponent } from './listar-mercancia.component';

describe('ListarMercanciaComponent', () => {
  let component: ListarMercanciaComponent;
  let fixture: ComponentFixture<ListarMercanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMercanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
