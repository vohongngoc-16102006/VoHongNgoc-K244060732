from PyQt6.QtWidgets import QMainWindow

from Chapter5.ex73.ui.QuadraticEquation import Ui_MainWindow
from Chapter5.libs.quadratic_equation import solve_quadratic_equation


class QuadraticEquationEx(Ui_MainWindow):
    def setupUi(self, MainWindow):
        if MainWindow == QMainWindow:
            MainWindow = QMainWindow()

        super().setupUi(MainWindow)
        self.MainWindow = MainWindow
        self.setupSignalAndSlot()

    def show_window(self):
        self.MainWindow.show()

    def setupSignalAndSlot(self):
        self.pushButton.clicked.connect(self.solve)

    def solve(self):
        a = float(self.enterALineEdit.text())
        b = float(self.enterBLineEdit.text())
        c = float(self.enterCLineEdit.text())

        result = solve_quadratic_equation(a, b, c)

        self.resultLineEdit.setText(result)