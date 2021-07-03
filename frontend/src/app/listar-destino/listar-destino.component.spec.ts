import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDestinoComponent } from './listar-destino.component';

describe('ListarDestinoComponent', () => {
  let component: ListarDestinoComponent;
  let fixture: ComponentFixture<ListarDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
