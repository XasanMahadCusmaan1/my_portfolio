# Hassan Osman — Frontend Developer Portfolio

This repository contains the source for Hassan Osman’s personal portfolio website. It introduces Hassan and his frontend development and design services, presents selected projects and learning exercises, and gives visitors a way to prepare a project inquiry. The website is a static, client-side site built with HTML, Sass/CSS, and vanilla JavaScript; it does not use a server or database.

## What the website contains

- **Introduction:** A short professional introduction, profile image, and downloadable CV.
- **Technologies:** A visual list of tools and technologies, including HTML, CSS, JavaScript, React, Node.js, Git, GitHub, and Sass.
- **About:** Background, development and design services, and testimonials.
- **Projects:** Three browsable categories:
  - **Coding:** Personal Task Manager, Quiz App, and Study Tracker.
  - **Design:** Scroll-Driven Animation and Image Slider.
  - **Practice:** Calculator Interface, Tabs Showcase, React Profile Cards, Movie Website, Recipe Finder, Quran API Fetch, React To-Do App, and React Router Playground.
- **Contact:** A form for preparing an inquiry email.
- **Footer:** Section navigation and a link back to the contact form.

The project galleries use JavaScript-powered carousels. The category selector supports keyboard navigation, and the layout and navigation are designed to work on mobile and desktop screens.

## Technologies

- **HTML** for page structure and accessible controls
- **Sass** for modular styles, compiled to CSS
- **CSS** for the responsive visual design and animations
- **Vanilla JavaScript** for project tabs and carousels, mobile navigation behavior, and the contact form
- **npm and Dart Sass** for compiling the stylesheet

React, TypeScript, and other tools appear in some of the portfolio’s learning exercises; they are not dependencies required to run this portfolio website.

## Run locally

You need Node.js and npm to compile the Sass source. From the repository root:

```bash
npm install
npm run compile:sass
```

The Sass command watches the source and compiles `sass/main.scss` and its imports to `css/style.css`. Keep it running while editing Sass files.

Serve the repository root with a local static web server and open its URL in a browser. For example, if you have Python installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. Serving from the repository root is recommended because some page and stylesheet assets use root-relative paths. No JavaScript build step is required.

## Contact form behavior

The contact form validates its fields in the browser and opens a pre-filled Gmail compose draft. The visitor must review and send the message; the website does not send or store form submissions. A Gmail account may be required to use the compose page.

## Project links and assets

The project cards include local preview artwork in `assets/images/projects/`. Some card links point to sibling folders or separate projects that are not part of this repository. Those links will only work when the corresponding projects are available at the referenced paths; their presence in the portfolio does not mean their source code is included here.

The CV, images, and icons used by the page are kept in `assets/`.

## Repository structure

```text
.
├── assets/
│   ├── images/
│   ├── icons/
│   └── Hassan_Osman_CV.pdf
├── css/                 # Generated stylesheet (build output)
├── js/
│   └── app.js           # Interactive behavior
├── sass/                # Sass source modules
├── index.html           # Portfolio page
├── package.json         # Sass script and development dependency
└── package-lock.json
```

Generated CSS and source-map files under `css/` are excluded from Git. Run the Sass compile command before serving or deploying the site so that `css/style.css` exists.

## License

The `package.json` metadata declares the ISC license. The repository does not currently include a separate license file.
