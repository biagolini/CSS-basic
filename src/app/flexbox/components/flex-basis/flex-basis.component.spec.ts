import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBasisComponent } from './flex-basis.component';

describe('FlexBasisComponent', () => {
  let component: FlexBasisComponent;
  let fixture: ComponentFixture<FlexBasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexBasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
