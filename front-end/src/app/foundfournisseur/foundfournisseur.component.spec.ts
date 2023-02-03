import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundfournisseurComponent } from './foundfournisseur.component';

describe('FoundfournisseurComponent', () => {
  let component: FoundfournisseurComponent;
  let fixture: ComponentFixture<FoundfournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundfournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
