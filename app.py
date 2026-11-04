# ==============================================================
#  BUILD A PORTFOLIO: a professional site, written in Python
#
#  HOW IT WORKS
#  - Edit this file, then click "Commit changes" on GitHub.
#  - Your live site updates on its own within a minute or so.
#  - Anything after a # is a note to you. Python ignores it.
#
#  Fill in Steps 1 to 5. Then use the FEATURE MENU at the bottom
#  to add extras that make your site stand out.
#
#  PRIVACY: this site is public. Do not include your phone number,
#  home address, or student number here or in your resume file.
# ==============================================================
 
import os
import streamlit as st
 
# --------------------------------------------------------------
# STEP 1: THE BASICS
# Change the words inside the quotes. Keep the quotes.
# --------------------------------------------------------------
NAME = "Your Name"
HEADLINE = "Your program | What you are aiming for"   # e.g. "Economics student | Aspiring data analyst"
LOCATION = "City, Province or State"
OPEN_TO = "Open to: summer 2027 internships"          # or "" to hide it
PHOTO = "photo.jpg"      # a professional-looking headshot; upload it to this repo
RESUME = "resume.pdf"    # upload your resume as a PDF with this exact name
PAGE_ICON = "💼"         # the little icon in the browser tab
LAST_UPDATED = "Month Year"
 
# --------------------------------------------------------------
# STEP 2: ABOUT YOU
# 3 to 4 sentences: who you are, what you study or do, what you
# are aiming for, and one strength. Write it in your own voice.
# --------------------------------------------------------------
ABOUT = """
Write a short professional summary here. Say what you study, what you are
good at, and the kind of work or opportunity you are looking for.
 
A second short paragraph is optional. Delete it if you do not need it.
"""
 
# Group your skills however makes sense. Each name becomes a badge.
# Do not use square brackets [ ] inside a skill name.
SKILLS = {
    "Technical": ["Python", "Excel", "Data analysis"],
    "Professional": ["Public speaking", "Project management", "Research"],
    "Languages": ["English", "French"],
}
 
# --------------------------------------------------------------
# STEP 3: EXPERIENCE AND EDUCATION
# Each {...} block is one entry. To add another, copy a whole
# block (including the comma at the end) and paste it below.
#
# Write each point like this:  action verb + what you did + result.
# Example: "Organized a 40-person workshop, with 90% positive feedback"
# Include jobs, internships, volunteering, and leadership roles.
# --------------------------------------------------------------
EXPERIENCE = [
    {
        "role": "Your role",
        "organization": "Organization name",
        "dates": "May 2025 to Aug 2025",
        "points": [
            "Started with an action verb and described what you did",
            "Added a result or number if you have one",
        ],
    },
    {
        "role": "Another role",
        "organization": "Another organization",
        "dates": "Sep 2024 to Apr 2025",
        "points": [
            "Delete any entries you do not need",
        ],
    },
]
 
EDUCATION = [
    {
        "school": "Your University",
        "degree": "Bachelor of Arts in Your Major",
        "dates": "2024 to 2028",
    },
]
 
# --------------------------------------------------------------
# STEP 4: PROJECTS
# Show your best 2 to 4. For each, say the problem, what you did,
# and the outcome. "tags" are badges for tools or topics.
# Leave "link" as "" if there is nothing to link to.
# --------------------------------------------------------------
PROJECTS = [
    {
        "title": "Project name",
        "year": "2026",
        "summary": "One or two sentences: the problem, what you did, and the result.",
        "tags": ["Python", "Research"],
        "link": "https://example.com",
    },
    {
        "title": "Another project",
        "year": "2025",
        "summary": "Delete any blocks you do not need.",
        "tags": ["Teamwork"],
        "link": "",
    },
]
 
# --------------------------------------------------------------
# STEP 5: CONTACT
# Format is "Label": "link". Only keep what you want public.
# --------------------------------------------------------------
LINKS = {
    "Email": "mailto:you@example.com",
    "LinkedIn": "https://www.linkedin.com/in/your-name",
    "GitHub": "https://github.com/your-username",
}
 
 
# ==============================================================
#  BELOW THIS LINE BUILDS THE PAGE.
#  Leave it alone until Steps 1 to 5 look right.
# ==============================================================
 
st.set_page_config(page_title=f"{NAME} | Portfolio", page_icon=PAGE_ICON)
 
# Header: photo on the left, details on the right
left, right = st.columns([1, 3])
with left:
    if os.path.exists(PHOTO):
        st.image(PHOTO)
with right:
    st.title(NAME)
    st.subheader(HEADLINE)
    details = [item for item in (LOCATION, OPEN_TO) if item]
    st.caption("  |  ".join(details))
    # The download button only appears if you have uploaded resume.pdf
    if os.path.exists(RESUME):
        with open(RESUME, "rb") as file:
            st.download_button(
                "Download resume", file.read(),
                file_name=RESUME, mime="application/pdf",
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
#  FEATURE MENU
#
#  Each feature below is switched OFF (every line starts with #).
#  To turn one ON:
#    1. Select all of its lines.
#    2. Press Ctrl + / (or Cmd + / on Mac) to remove the # marks.
#       If that does not work, delete the "# " at the start of
#       each line by hand.
#    3. Commit, wait a moment, and refresh your site.
#  Then change the words inside the quotes to your own.
#  Features appear under your tabs. Only add what is true and
#  that you are proud of. A short, strong site beats a long one.
# ==============================================================
 
# ---- Feature A: key highlights -------------------------------
# columns = st.columns(3)
# columns[0].metric("GPA", "3.8")
# columns[1].metric("Internships", "2")
# columns[2].metric("Projects shipped", "5")
 
# ---- Feature B: certifications and awards --------------------
# st.subheader("Certifications and awards")
# for item in ["Dean's List, 2025", "Name of a certificate, 2026"]:
#     st.markdown(f"- {item}")
 
# ---- Feature C: recommendations ------------------------------
# Always ask permission before quoting someone.
# st.subheader("What people say")
# with st.container(border=True):
#     st.write("A short quote from a professor, manager, or teammate.")
#     st.caption("Name, Title")
 
# ---- Feature D: writing and talks ----------------------------
# st.subheader("Writing and talks")
# st.markdown("- [Title of an article, presentation, or poster](https://example.com)")
 
# ---- Feature E: a featured project with a picture ------------
# Upload project.png to your repo first.
# st.subheader("Featured project")
# st.image("project.png", caption="A screenshot or photo of your work")
# st.write("Two sentences: the problem, what you did, and the result.")
# st.link_button("See the full project", "https://example.com")
 
# ---- Feature F: a chart from your own work -------------------
# import pandas as pd
# st.subheader("A result I am proud of")
# results = pd.DataFrame({
#     "Month": ["Jan", "Feb", "Mar"],
#     "Result": [10, 25, 40],
# })
# st.line_chart(results, x="Month", y="Result")
 
# ---- Feature G: a personal side ------------------------------
# with st.expander("Beyond work"):
#     st.write("A few lines about hobbies, volunteering, or what you do for fun.")
 
# ---- Feature H: a "book a chat" button -----------------------
# st.link_button("Book a 15-minute chat", "https://calendly.com/your-link")
 
# ---- Your own idea? ------------------------------------------
# Browse everything Streamlit can do at https://docs.streamlit.io
# (look for "API reference"). Each item is a one-line addition
# like the ones above.
 
 
# ==============================================================
#  KEEP THIS LAST: the footer
# ==============================================================
st.divider()
st.caption(f"Built with Python and Streamlit. Last updated {LAST_UPDATED}.")
 