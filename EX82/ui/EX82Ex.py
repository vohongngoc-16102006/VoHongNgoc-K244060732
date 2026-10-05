from PyQt6.QtWidgets import QMessageBox

from EX82.model.electricity_model import calculate_bill
from EX82.ui.EX82 import Ui_MainWindow


class EX82Ex(Ui_MainWindow):
    def setupUi(self, MainWindow):
        super().setupUi(MainWindow)
        self.MainWindow = MainWindow
        self.MainWindow.setWindowTitle("EX82 - Tính tiền điện")
        self.lineEdit_3.setReadOnly(True)
        self.setupSignalAndSlot()
        self.lineEdit.setFocus()

    def show_window(self):
        self.MainWindow.show()

    def setupSignalAndSlot(self):
        self.pushButton.clicked.connect(self.invoke_calculate)
        self.pushButton_2.clicked.connect(self.invoke_reset)
        self.pushButton_3.clicked.connect(self.invoke_close)

    def invoke_calculate(self):
        self.lineEdit_3.clear()
        name = self.lineEdit.text().strip()
        if not name:
            QMessageBox.warning(self.MainWindow, "Lỗi nhập liệu",
                                "Vui lòng nhập tên khách hàng.")
            self.lineEdit.setFocus()
            return
        try:
            kwh = float(self.lineEdit_2.text().strip().replace(",", "."))
        except ValueError:
            QMessageBox.warning(self.MainWindow, "Lỗi nhập liệu",
                                "Vui lòng nhập số kWh hợp lệ, ví dụ 150 hoặc 150.5.")
            self.lineEdit_2.setFocus()
            return
        try:
            customer_group = self.comboBox.currentIndex() + 1
            bill = calculate_bill(name, customer_group, kwh)
            self.lineEdit_3.setText(f"{bill:,.0f}".replace(",", "."))
            self.statusbar.showMessage(f"Đã tính tiền điện cho khách hàng: {name}")
        except ValueError as error:
            QMessageBox.warning(self.MainWindow, "Lỗi nhập liệu", str(error))
            self.lineEdit_2.setFocus()

    def invoke_reset(self):
        self.lineEdit.clear()
        self.lineEdit_2.clear()
        self.lineEdit_3.clear()
        self.comboBox.setCurrentIndex(0)
        self.statusbar.clearMessage()
        self.lineEdit.setFocus()

    def invoke_close(self):
        self.MainWindow.close()
