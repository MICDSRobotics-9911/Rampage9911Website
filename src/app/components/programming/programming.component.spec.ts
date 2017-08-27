import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingComponent } from './programming.component';

describe('ProgrammingComponent', () => {
  let component: ProgrammingComponent;
  let fixture: ComponentFixture<ProgrammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
