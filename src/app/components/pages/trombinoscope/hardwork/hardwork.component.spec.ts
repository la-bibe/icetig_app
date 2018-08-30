import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardworkComponent } from './hardwork.component';

describe('HardworkComponent', () => {
  let component: HardworkComponent;
  let fixture: ComponentFixture<HardworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
