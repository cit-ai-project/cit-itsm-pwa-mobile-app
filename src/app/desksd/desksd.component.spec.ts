import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesksdComponent } from './desksd.component';

describe('DesksdComponent', () => {
  let component: DesksdComponent;
  let fixture: ComponentFixture<DesksdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesksdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesksdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
