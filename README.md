## What is included

```text
index.md                    Welcome to CS4218
overview/index.md           Module overview
overview/instructor.md      Meet the Instructor
overview/piazza.md          Join Piazza For Discussions
overview/faq.md             FAQ
overview/schedule-...md     Schedule, deadlines, and evaluation guide
overview/briefing-...md     Weekly Briefing Recordings
overview/venue.md           Venue and directions
schedule/index.md           13-week semester schedule
schedule/week1.md ...       One editable page for every week
schedule/week13.md
project/index.md             Project overview
project/setting-up.md        Project environment setup
project/unit-testing.md      Project unit testing
project/debugging.md         Project debugging
project/code-analysis-...md  Project code analysis and coverage
project/ui-testing.md        Project UI testing
project/load-testing.md      Project load testing
other-links.md              Platforms, resources, and support
deadlines-evaluation.md     Deadlines, weights, criteria, and rules
```

There are 32 public pages in total. “Module overview”, “Weekly schedule”, and
“Project” expand into their own groups of pages in the course navigation.

## Prerequisites

- Node.js 20 or later
- npm

## Preview the website

Install dependencies once:

```bash
npm install
```

Start the local preview:

```bash
npm run serve
```

MarkBind will show the local address and refresh after source files are saved.
Stop the preview with `Ctrl+C`.

## Add your content

1. Open `_markbind/variables.md` and replace the module code, name, semester,
   timetable, instructor, venue, email, platform, tagline, and summary.
2. Open `index.md` and replace the welcome message and first-class checklist.
3. Edit the pages inside `overview/` for the overview, instructor, Piazza, FAQ,
   schedule guide, briefing recordings, and venue content.
4. Open `schedule/index.md` and fill in the date, topic, preparation, and due
   columns for all 13 weeks.
5. Edit `schedule/week1.md` through `schedule/week13.md`. Each page has prepared
   sections for its overview, outcomes, preparation, core material, applied
   session, follow-up work, resources, recordings, and deadlines.
6. Edit the pages inside `project/` for the project overview, setup, unit
   testing, debugging, code analysis and coverage, UI testing, and load
   testing. Add approved destinations to `other-links.md`. Replace a status
   label such as:

   ```html
   <span class="link-status">Link to be added</span>
   ```

   with a descriptive link:

   ```html
   <a class="card-link" href="https://example.edu/project-brief">
     Read the project brief
   </a>
   ```

7. Complete `deadlines-evaluation.md`. Give every deadline a full date, time,
   and timezone, and make sure weights total 100%.
8. Remove the `Draft` and template notices only after the information has been
   checked and approved.

To find unfinished content quickly:

```bash
rg -n 'data-placeholder|Add date|Add topic|Link to be added|To be confirmed' \
  --glob '*.md'
```

## Add pictures

1. Copy your image file into `images/content/`. Use a simple lowercase filename
   without spaces, such as `instructor-lee.jpg`, `welcome-banner.jpg`, or
   `lecture-venue.png`.
2. Open the page where the image should appear.
3. Find the `<div class="image-placeholder">...</div>` block and replace the
   complete block with an `<img>` element:

   ```html
   <img
     class="content-image content-image-landscape"
     src="{{ baseUrl }}/images/content/welcome-banner.jpg"
     alt="Students working together during a software testing class"
   />
   ```

4. For an instructor portrait, use the portrait class:

   ```html
   <img
     class="content-image content-image-portrait"
     src="{{ baseUrl }}/images/content/instructor-lee.jpg"
     alt="Portrait of Professor Lee"
   />
   ```

5. Replace the nearby `<figcaption>` text with a useful caption and credit, or
   delete the caption if it is unnecessary.

Use `.jpg` or `.webp` for photographs and `.png` for diagrams or screenshots
that need sharp text. Keep photographs reasonably compressed. Alternative text
should explain the useful information in the image; use `alt=""` only for a
purely decorative image. Never publish screenshots containing student names,
email addresses, grades, private posts, or access tokens.

## Change the layout or appearance

- Header, navigation, and footer: `_markbind/layouts/`
- Shared module details: `_markbind/variables.md`
- Colours, typography, spacing, cards, and mobile layout: `css/main.css`
- Search and mobile-navigation behaviour: `js/site.js`

## Validate before publishing

```bash
npm run validate
```

Validation audits independence, builds all pages, removes source-only material
from the publishable bundle, and checks generated links and fragments. The
static website is written to `_site/`.

## Publish automatically with GitHub Actions

The workflow in `.github/workflows/deploy-pages.yml` validates, builds, and
publishes the website after every push to `main`. Before its first deployment,
an administrator must open **Settings → Pages** in GitHub and set **Source** to
**GitHub Actions**.

After that one-time setting, publish a change with the normal Git workflow:

```bash
git add .
git commit -m "Update course website"
git push origin main
```

GitHub Actions installs the locked dependencies, runs `npm run validate`,
uploads the cleaned `_site/` directory, and deploys it to GitHub Pages. The
workflow can also be run manually from **Actions → Deploy GitHub Pages → Run
workflow**.

Only `main` is deployed. Work pushed to a feature branch becomes public after
it is merged into `main`.

## Manual branch-based deployment

`npm run deploy` remains available as a fallback for repositories configured
under **Settings → Pages → Deploy from a branch → `gh-pages` → `/(root)`**. Do
not use this mode at the same time as the GitHub Actions publishing source.
