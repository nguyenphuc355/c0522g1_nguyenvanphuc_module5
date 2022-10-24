import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteCategoryComponent } from './craete-category.component';

describe('CraeteCategoryComponent', () => {
  let component: CraeteCategoryComponent;
  let fixture: ComponentFixture<CraeteCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraeteCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraeteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
