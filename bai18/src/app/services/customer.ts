import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

export interface CustomerGroup {
  CustomerTypeId: number;
  CustomerTypeName: string;
  Customers: Customer[];
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'assets/data/customers.json';

  constructor(private http: HttpClient) {}

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this.http.get<CustomerGroup[]>(this.url).pipe(
      catchError((error: HttpErrorResponse) =>
        throwError(() => new Error(`Không tải được dữ liệu: ${error.message}`))
      )
    );
  }
}