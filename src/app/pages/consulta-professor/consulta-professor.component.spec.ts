import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProfessorComponent } from './consulta-professor.component';

describe('ConsultaProfessorComponent', () => {
  let component: ConsultaProfessorComponent;
  let fixture: ComponentFixture<ConsultaProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaProfessorComponent]
    });
    fixture = TestBed.createComponent(ConsultaProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
