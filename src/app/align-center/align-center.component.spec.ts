import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignCenterComponent } from './align-center.component';

describe('AlignCenterComponent', () => {
  let component: AlignCenterComponent;
  let fixture: ComponentFixture<AlignCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
