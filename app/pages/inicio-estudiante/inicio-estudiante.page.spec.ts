import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioEstudiantePage } from './inicio-estudiante.page';

describe('InicioEstudiantePage', () => {
  let component: InicioEstudiantePage;
  let fixture: ComponentFixture<InicioEstudiantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
