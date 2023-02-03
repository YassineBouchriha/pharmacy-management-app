import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundProduitComponent } from './found-produit.component';

describe('FoundProduitComponent', () => {
  let component: FoundProduitComponent;
  let fixture: ComponentFixture<FoundProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
