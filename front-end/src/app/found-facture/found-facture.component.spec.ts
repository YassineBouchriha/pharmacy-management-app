import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundFactureComponent } from './found-facture.component';

describe('FoundFactureComponent', () => {
  let component: FoundFactureComponent;
  let fixture: ComponentFixture<FoundFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
