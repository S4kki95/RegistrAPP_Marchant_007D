import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilactualizarDocentePage } from './perfilactualizar-docente.page';

describe('PerfilactualizarDocentePage', () => {
  let component: PerfilactualizarDocentePage;
  let fixture: ComponentFixture<PerfilactualizarDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilactualizarDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
