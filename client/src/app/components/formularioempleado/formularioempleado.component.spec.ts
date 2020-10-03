import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioempleadoComponent } from './formularioempleado.component';

describe('FormularioempleadoComponent', () => {
  let component: FormularioempleadoComponent;
  let fixture: ComponentFixture<FormularioempleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioempleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
