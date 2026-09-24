import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bai13ProductDetail } from './bai13-product-detail';

describe('Bai13ProductDetail', () => {
  let component: Bai13ProductDetail;
  let fixture: ComponentFixture<Bai13ProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai13ProductDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(Bai13ProductDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
