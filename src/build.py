# ==============================================================
#  BUILD A PORTFOLIO: a professional site, written in Python
#
#  This file builds and renders your portfolio website using
#  Streamlit and the information provided in data.py.
# ==============================================================

import os
import importlib
import streamlit as st

# Paths: this file lives in src/. Your photo, resume and images live in
# src/assets/, and .streamlit/ lives in the project root (one folder up).
SRC_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(SRC_DIR)
ASSETS_DIR = os.path.join(SRC_DIR, "assets")


def asset(path):
    """Turn a file name from data.py into a full path in src/assets/."""
    if not path:
        return ""
    return path if os.path.isabs(path) else os.path.join(ASSETS_DIR, path)

# Import and dynamically reload data.py so edits appear immediately
import data
importlib.reload(data)

NAME = getattr(data, "NAME", "Your Name")
HEADLINE = getattr(data, "HEADLINE", "")
LOCATION = getattr(data, "LOCATION", "")
OPEN_TO = getattr(data, "OPEN_TO", "")
PHOTO = getattr(data, "PHOTO", "")
RESUME = getattr(data, "RESUME", "")
PAGE_ICON = getattr(data, "PAGE_ICON", "💼")
LAST_UPDATED = getattr(data, "LAST_UPDATED", "")
ABOUT = getattr(data, "ABOUT", "")
SKILLS = getattr(data, "SKILLS", {})
EXPERIENCE = getattr(data, "EXPERIENCE", [])
EDUCATION = getattr(data, "EDUCATION", [])
PROJECTS = getattr(data, "PROJECTS", [])
LINKS = getattr(data, "LINKS", {})
THEME = getattr(data, "THEME", {})
HIGHLIGHTS = getattr(data, "HIGHLIGHTS", [])
CERTIFICATIONS = getattr(data, "CERTIFICATIONS", [])
RECOMMENDATIONS = getattr(data, "RECOMMENDATIONS", [])
WRITING_AND_TALKS = getattr(data, "WRITING_AND_TALKS", [])
FEATURED_PROJECT = getattr(data, "FEATURED_PROJECT", {})
CHART_DATA = getattr(data, "CHART_DATA", {})
PERSONAL_SIDE = getattr(data, "PERSONAL_SIDE", "")
BOOK_A_CHAT = getattr(data, "BOOK_A_CHAT", {})
render_features = getattr(data, "render_features", None)


# ==============================================================
#  THEME CONFIGURATION
#  Applies theme settings from data.py to Streamlit.
# ==============================================================
def apply_theme():
    if not isinstance(THEME, dict):
        return

    # Sync with .streamlit/config.toml
    config_dir = os.path.join(ROOT_DIR, ".streamlit")
    config_file = os.path.join(config_dir, "config.toml")
    try:
        os.makedirs(config_dir, exist_ok=True)
        config_content = (
            "# YOUR LOOK: synced from THEME in data.py\n"
            "[theme]\n"
            f'base = "{THEME.get("base", "light")}"\n'
            f'primaryColor = "{THEME.get("primaryColor", "#E4572E")}"\n'
            f'backgroundColor = "{THEME.get("backgroundColor", "#FAFAFA")}"\n'
            f'secondaryBackgroundColor = "{THEME.get("secondaryBackgroundColor", "#EDEDED")}"\n'
            f'textColor = "{THEME.get("textColor", "#222222")}"\n'
            f'font = "{THEME.get("font", "sans serif")}"\n'
        )
        existing_content = ""
        if os.path.exists(config_file):
            with open(config_file, "r", encoding="utf-8") as f:
                existing_content = f.read()
        if existing_content.strip() != config_content.strip():
            with open(config_file, "w", encoding="utf-8") as f:
                f.write(config_content)
    except Exception:
        pass

    # Inject CSS for immediate live-reload theme responsiveness
    primary = THEME.get("primaryColor", "#E4572E")
    bg = THEME.get("backgroundColor", "#FAFAFA")
    sec_bg = THEME.get("secondaryBackgroundColor", "#EDEDED")
    text = THEME.get("textColor", "#222222")
    font = THEME.get("font", "sans serif")
    font_family = {
        "sans serif": "sans-serif",
        "serif": "serif",
        "monospace": "monospace",
    }.get(font, font)

    st.markdown(
        f"""
        <style>
        .stApp {{
            background-color: {bg};
            color: {text};
            font-family: {font_family};
        }}
        [data-testid="stHeader"] {{
            background-color: {bg};
        }}
        .stButton>button, .stDownloadButton>button {{
            border-color: {primary} !important;
        }}
        .stTabs [data-baseweb="tab-highlight"] {{
            background-color: {primary} !important;
        }}
        .stTabs [aria-selected="true"] {{
            color: {primary} !important;
        }}
        a {{
            color: {primary} !important;
        }}
        </style>
        """,
        unsafe_allow_html=True,
    )


# ==============================================================
#  BELOW THIS LINE BUILDS THE PAGE.
#  Leave it alone until Steps 1 to 5 look right.
# ==============================================================

st.set_page_config(page_title=f"{NAME} | Portfolio", page_icon=PAGE_ICON)
apply_theme()

# Header: photo on the left, details on the right
left, right = st.columns([1, 3])
with left:
    if os.path.exists(asset(PHOTO)):
        st.image(asset(PHOTO))
with right:
    st.title(NAME)
    st.subheader(HEADLINE)
    details = [item for item in (LOCATION, OPEN_TO) if item]
    st.caption("  |  ".join(details))
    # The download button only appears if you have uploaded resume.pdf
    if os.path.exists(asset(RESUME)):
        with open(asset(RESUME), "rb") as file:
            st.download_button(
                "Download resume", file.read(),
                file_name=os.path.basename(RESUME), mime="application/pdf",
            )

# The tabs. To ADD A NEW TAB:
#   1. add a name to this list,           e.g. "Writing"
#   2. add a matching name on the left,   e.g. writing_tab
#   3. add a "with writing_tab:" block below and put your code inside
about_tab, experience_tab, projects_tab, contact_tab = st.tabs(
    ["About", "Experience", "Projects", "Contact"]
)

with about_tab:
    st.write(ABOUT)
    st.subheader("Skills")
    for category, items in SKILLS.items():
        st.markdown(f"**{category}**")
        st.markdown(" ".join(f":blue-badge[{item}]" for item in items))

with experience_tab:
    st.subheader("Experience")
    for job in EXPERIENCE:
        st.markdown(f"**{job['role']}**, {job['organization']}")
        st.caption(job["dates"])
        for point in job["points"]:
            st.markdown(f"- {point}")
        st.divider()
    st.subheader("Education")
    for school in EDUCATION:
        st.markdown(f"**{school['school']}**")
        st.write(school["degree"])
        st.caption(school["dates"])

with projects_tab:
    for project in PROJECTS:
        with st.container(border=True):
            st.subheader(f"{project['title']} ({project['year']})")
            st.markdown(" ".join(f":gray-badge[{tag}]" for tag in project["tags"]))
            st.write(project["summary"])
            if project["link"]:
                st.link_button("View project", project["link"])

with contact_tab:
    st.write("The best way to reach me is by email or LinkedIn.")
    columns = st.columns(len(LINKS))
    for column, (label, url) in zip(columns, LINKS.items()):
        column.link_button(label, url)


# ==============================================================
#  FEATURE MENU (OPTIONAL EXTRAS)
#  Build logic for features configured in data.py.
# ==============================================================

# ---- Feature A: key highlights -------------------------------
if HIGHLIGHTS:
    columns = st.columns(len(HIGHLIGHTS))
    for col, item in zip(columns, HIGHLIGHTS):
        col.metric(item.get("label", ""), str(item.get("value", "")))

# ---- Feature B: certifications and awards --------------------
if CERTIFICATIONS:
    st.subheader("Certifications and awards")
    for item in CERTIFICATIONS:
        st.markdown(f"- {item}")

# ---- Feature C: recommendations ------------------------------
if RECOMMENDATIONS:
    st.subheader("What people say")
    for rec in RECOMMENDATIONS:
        with st.container(border=True):
            st.write(rec.get("quote", ""))
            if rec.get("author"):
                st.caption(rec.get("author"))

# ---- Feature D: writing and talks ----------------------------
if WRITING_AND_TALKS:
    st.subheader("Writing and talks")
    for item in WRITING_AND_TALKS:
        title = item.get("title", "")
        link = item.get("link", "")
        if link:
            st.markdown(f"- [{title}]({link})")
        else:
            st.markdown(f"- {title}")

# ---- Feature E: a featured project with a picture ------------
if FEATURED_PROJECT:
    st.subheader(FEATURED_PROJECT.get("title", "Featured project"))
    img = FEATURED_PROJECT.get("image")
    if img and os.path.exists(asset(img)):
        st.image(asset(img), caption=FEATURED_PROJECT.get("caption", ""))
    if FEATURED_PROJECT.get("description"):
        st.write(FEATURED_PROJECT["description"])
    if FEATURED_PROJECT.get("link"):
        st.link_button("See the full project", FEATURED_PROJECT["link"])

# ---- Feature F: a chart from your own work -------------------
if CHART_DATA and CHART_DATA.get("data"):
    try:
        import pandas as pd
        if CHART_DATA.get("title"):
            st.subheader(CHART_DATA["title"])
        df = pd.DataFrame(CHART_DATA["data"])
        x_axis = CHART_DATA.get("x_axis")
        y_axis = CHART_DATA.get("y_axis")
        st.line_chart(df, x=x_axis, y=y_axis)
    except Exception:
        pass

# ---- Feature G: a personal side ------------------------------
if PERSONAL_SIDE:
    with st.expander("Beyond work"):
        st.write(PERSONAL_SIDE)

# ---- Feature H: a "book a chat" button -----------------------
if BOOK_A_CHAT and BOOK_A_CHAT.get("link"):
    label = BOOK_A_CHAT.get("label", "Book a 15-minute chat")
    st.link_button(label, BOOK_A_CHAT["link"])

# Fallback for render_features if user provided custom function
if render_features:
    render_features()


# ==============================================================
#  KEEP THIS LAST: the footer
# ==============================================================
st.divider()
st.caption(f"Built with Python and Streamlit. Last updated {LAST_UPDATED}.")
