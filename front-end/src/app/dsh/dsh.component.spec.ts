import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DshComponent } from './dsh.component';

describe('DshComponent', () => {
  let component: DshComponent;
  let fixture: ComponentFixture<DshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
