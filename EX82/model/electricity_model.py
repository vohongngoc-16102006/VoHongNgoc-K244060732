
import math


class ElectricityBill:
    def __init__(self, name="", customer_group=1, kwh=0.0):
        self.name = name
        self.customer_group = customer_group
        self.kwh = kwh

    def calculate_bill(self):
        if not self.name.strip():
            raise ValueError("Vui lòng nhập tên khách hàng.")
        if not math.isfinite(self.kwh) or self.kwh < 0:
            raise ValueError("Số kWh phải là số hữu hạn và không được âm.")

        if self.customer_group == 1:
            if self.kwh <= 50:
                bill = self.kwh * 1549
            elif self.kwh <= 100:
                bill = 50 * 1549 + (self.kwh - 50) * 1600
            elif self.kwh <= 200:
                bill = 50 * 1549 + 50 * 1600 + (self.kwh - 100) * 1858
            elif self.kwh <= 300:
                bill = (50 * 1549 + 50 * 1600 + 100 * 1858
                        + (self.kwh - 200) * 2340)
            elif self.kwh <= 400:
                bill = (50 * 1549 + 50 * 1600 + 100 * 1858
                        + 100 * 2340 + (self.kwh - 300) * 2615)
            else:
                bill = (50 * 1549 + 50 * 1600 + 100 * 1858
                        + 100 * 2340 + 100 * 2615
                        + (self.kwh - 400) * 2701)
        elif self.customer_group == 2:
            bill = self.kwh * 2271
        else:
            raise ValueError("Nhóm khách hàng phải là 1 hoặc 2.")
        return bill


def calculate_bill(name, customer_group, kwh):
    customer = ElectricityBill(name, customer_group, kwh)
    return customer.calculate_bill()
