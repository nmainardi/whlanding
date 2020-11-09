import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowModeComponent } from './window-mode.component';

describe('WindowModeComponent', () => {
  let component: WindowModeComponent;
  let fixture: ComponentFixture<WindowModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
