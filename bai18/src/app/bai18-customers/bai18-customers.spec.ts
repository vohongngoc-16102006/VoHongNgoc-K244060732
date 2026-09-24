import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bai18Customers } from './bai18-customers';

describe('Bai18Customers', () => {
  let component: Bai18Customers;
  let fixture: ComponentFixture<Bai18Customers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai18Customers],
    }).compileComponents();

    fixture = TestBed.createComponent(Bai18Customers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
