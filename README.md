# Hassan Osman | Portfolio

A responsive personal portfolio showcasing Hassan Osman’s frontend development and design work. The site includes an introduction, technology list, biography, project carousel, and a contact form.

## Features

- Responsive navigation and page layout
- About, services, testimonials, and technology sections
- Coding, design, and practice project galleries with keyboard-accessible category tabs and carousels
- Contact form that prepares a message in Gmail for the visitor to review and send
- Downloadable CV

## Built with

- HTML
- Sass and CSS
- Vanilla JavaScript

## Run locally

1. Clone this repository and open its folder.
2. Install the Sass development dependency:

   ```bash
   npm install
   ```

3. Compile Sass and keep the CSS updated while editing:

   ```bash
   npm run compile:sass
   ```

4. Open `index.html` in a browser. For local development, you can also serve the project folder with any static file server.

The Sass command watches `sass/main.scss` and its imported files, and writes the compiled stylesheet to `css/style.css`.

## Project structure

```text
.
├── assets/       # CV, images, and icons
├── css/          # Compiled stylesheet
├── js/           # Navigation, project galleries, and contact form
├── sass/         # Sass source files
├── index.html    # Portfolio page
└── package.json  # Sass build script and development dependency
```

## Notes

- The contact form opens a pre-filled Gmail draft; it does not send messages automatically.
- Some project cards link to separate projects that may need to be hosted or available locally to open.

## License

This project is published under the ISC license declared in `package.json`.
