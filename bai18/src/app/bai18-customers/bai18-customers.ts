import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerGroup, CustomerService } from '../services/customer';

@Component({
  selector: 'app-bai18-customers',
  standalone: false,
  templateUrl: './bai18-customers.html',
  styleUrl: './bai18-customers.css'
})
export class Bai18Customers implements OnInit {
  groups: CustomerGroup[] = [];
  errorMessage = '';

  constructor(private customerService: CustomerService,
              private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  this.customerService.getCustomerGroups().subscribe({
    next: (data) => {
      this.groups = data;
      this.cdr.markForCheck();
    },
    error: (error: Error) => {
      this.errorMessage = error.message;
      this.cdr.markForCheck();
    }
  });
}
}