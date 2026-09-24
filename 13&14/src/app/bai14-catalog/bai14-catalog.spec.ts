import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bai14Catalog } from './bai14-catalog';

describe('Bai14Catalog', () => {
  let component: Bai14Catalog;
  let fixture: ComponentFixture<Bai14Catalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai14Catalog],
    }).compileComponents();

    fixture = TestBed.createComponent(Bai14Catalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
