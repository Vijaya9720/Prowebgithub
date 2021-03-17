import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PntComponent } from './pnt.component';

describe('PntComponent', () => {
  let component: PntComponent;
  let fixture: ComponentFixture<PntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
