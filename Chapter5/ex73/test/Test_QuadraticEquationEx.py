import sys

from PyQt6.QtWidgets import QApplication, QMainWindow
from Chapter5.ex73.ui.QuadraticEquationEx import QuadraticEquationEx

app = QApplication(sys.argv)
myui = QuadraticEquationEx()
myui.setupUi(QMainWindow)
myui.show_window()

sys.exit(app.exec())