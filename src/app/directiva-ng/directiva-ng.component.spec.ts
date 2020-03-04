import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNGComponent } from './directiva-ng.component';

describe('DirectivaNGComponent', () => {
  let component: DirectivaNGComponent;
  let fixture: ComponentFixture<DirectivaNGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaNGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
