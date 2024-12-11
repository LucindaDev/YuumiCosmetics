import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubcategoriasComponent } from './form-subcategorias.component';

describe('FormSubcategoriasComponent', () => {
  let component: FormSubcategoriasComponent;
  let fixture: ComponentFixture<FormSubcategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSubcategoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSubcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
