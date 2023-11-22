import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilactualizarAlumnoPage } from './perfilactualizar-alumno.page';

describe('PerfilactualizarAlumnoPage', () => {
  let component: PerfilactualizarAlumnoPage;
  let fixture: ComponentFixture<PerfilactualizarAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilactualizarAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
