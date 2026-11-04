# ==============================================================
#  BUILD A PORTFOLIO: a professional site, written in Python
#
#  HOW IT WORKS
#  - Edit your content, details, and theme in data.py
#  - Page layout, structure, and features are in build.py
#  - This file executes the portfolio builder.
# ==============================================================

import os
import runpy

HERE = os.path.dirname(os.path.abspath(__file__))
runpy.run_path(os.path.join(HERE, "build.py"), run_name="__main__")
