import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingFormComponentComponent } from './testing-form-component.component';

describe('TestingFormComponentComponent', () => {
  let component: TestingFormComponentComponent;
  let fixture: ComponentFixture<TestingFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingFormComponentComponent]
    });
    fixture = TestBed.createComponent(TestingFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
