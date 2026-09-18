# Robotics Personal Website

A lightweight static portfolio designed for GitHub Pages.

## Included sections
- Landing / About
- Selected robotics projects
- Resume
- Contact
- Robotics-inspired animated background and diagrams
- Individual project detail pages
- Responsive mobile layout

## File structure

```text
.
├── index.html
├── assets/
│   ├── style.css
│   ├── script.js
│   └── resume.pdf
├── projects/
│   ├── project1.html
│   ├── project2.html
│   └── project3.html
└── README.md
```

## Edit these first

Open `index.html` and replace:
- `Your Name`
- `YN`
- `Your City`
- email
- GitHub URL
- LinkedIn URL
- Google Scholar URL
- education / experience text
- project descriptions

Then replace `assets/resume.pdf` with the actual resume.

## Deploy to GitHub Pages

### Option A: username.github.io
1. Create a repository named `YOUR_GITHUB_USERNAME.github.io`
2. Upload all files in this folder to the repository root.
3. Push / commit the files.
4. The website will be available at:
   `https://YOUR_GITHUB_USERNAME.github.io`

### Option B: normal repository
1. Create any public repository, for example `robotics-portfolio`.
2. Upload this folder.
3. In GitHub open:
   `Settings → Pages`
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Save.

The site will appear under the GitHub Pages URL shown in Settings.

## Adding project images

Put image files in `assets/` and add them to a project page:

```html
<img src="../assets/my_robot.jpg" alt="Robot experiment" style="width:100%;border-radius:14px;">
```

## Custom domain

GitHub Pages also supports custom domains. Add the domain under:
`Settings → Pages → Custom domain`.
