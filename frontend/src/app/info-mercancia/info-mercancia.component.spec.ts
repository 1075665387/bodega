import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMercanciaComponent } from './info-mercancia.component';

describe('InfoMercanciaComponent', () => {
  let component: InfoMercanciaComponent;
  let fixture: ComponentFixture<InfoMercanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMercanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
