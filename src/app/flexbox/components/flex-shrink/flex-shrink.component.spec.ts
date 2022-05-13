import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexShrinkComponent } from './flex-shrink.component';

describe('FlexShrinkComponent', () => {
  let component: FlexShrinkComponent;
  let fixture: ComponentFixture<FlexShrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexShrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexShrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
