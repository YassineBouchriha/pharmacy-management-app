import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundLaboComponent } from './found-labo.component';

describe('FoundLaboComponent', () => {
  let component: FoundLaboComponent;
  let fixture: ComponentFixture<FoundLaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundLaboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundLaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
