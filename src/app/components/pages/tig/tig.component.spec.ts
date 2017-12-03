import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TigComponent } from './tig.component';

describe('TigComponent', () => {
  let component: TigComponent;
  let fixture: ComponentFixture<TigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
