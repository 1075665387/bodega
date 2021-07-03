import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarDestinoComponent } from './filtrar-destino.component';

describe('FiltrarDestinoComponent', () => {
  let component: FiltrarDestinoComponent;
  let fixture: ComponentFixture<FiltrarDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
