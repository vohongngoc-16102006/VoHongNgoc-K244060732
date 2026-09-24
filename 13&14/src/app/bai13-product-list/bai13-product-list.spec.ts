import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bai13ProductList } from './bai13-product-list';

describe('Bai13ProductList', () => {
  let component: Bai13ProductList;
  let fixture: ComponentFixture<Bai13ProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai13ProductList],
    }).compileComponents();

    fixture = TestBed.createComponent(Bai13ProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
