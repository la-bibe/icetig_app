import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyshitComponent } from './easyshit.component';

describe('EasyshitComponent', () => {
  let component: EasyshitComponent;
  let fixture: ComponentFixture<EasyshitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyshitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyshitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
