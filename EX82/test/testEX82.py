import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from PyQt6.QtWidgets import QApplication, QMainWindow
from EX82.ui.EX82Ex import EX82Ex


def main():
    app = QApplication(sys.argv)
    main_window = QMainWindow()
    electricity_ui = EX82Ex()
    electricity_ui.setupUi(main_window)
    electricity_ui.show_window()
    return app.exec()


if __name__ == "__main__":
    sys.exit(main())
