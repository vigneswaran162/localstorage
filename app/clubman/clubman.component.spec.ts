import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubmanComponent } from './clubman.component';

describe('ClubmanComponent', () => {
  let component: ClubmanComponent;
  let fixture: ComponentFixture<ClubmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
