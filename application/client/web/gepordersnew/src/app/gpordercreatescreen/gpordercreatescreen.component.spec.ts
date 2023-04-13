import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpordercreatescreenComponent } from './gpordercreatescreen.component';

describe('GpordercreatescreenComponent', () => {
  let component: GpordercreatescreenComponent;
  let fixture: ComponentFixture<GpordercreatescreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpordercreatescreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpordercreatescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});