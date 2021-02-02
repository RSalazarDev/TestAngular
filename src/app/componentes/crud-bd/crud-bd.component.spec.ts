import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBdComponent } from './crud-bd.component';

describe('CrudBdComponent', () => {
  let component: CrudBdComponent;
  let fixture: ComponentFixture<CrudBdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudBdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
