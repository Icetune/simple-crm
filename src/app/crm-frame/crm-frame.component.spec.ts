import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmFrameComponent } from './crm-frame.component';

describe('CrmFrameComponent', () => {
  let component: CrmFrameComponent;
  let fixture: ComponentFixture<CrmFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
