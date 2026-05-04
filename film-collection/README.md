# Film Collection

A small movie catalog application built with Angular. Browse films, search by title, mark favorites, and view detailed info for each film.

## Features

- Film catalog with real-time search by title
- Favorite toggle per film
- Film details page with custom duration pipe
- Dynamic breadcrumbs
- Autofocus directive on the search field
- Angular Signals for all reactive state (no RxJS)

## Tech Stack

- Angular 21 (standalone components, no NgModules)
- TypeScript strict mode
- Angular Signals: `signal()`, `computed()`, `input()`, `output()`
- New control flow: `@if`, `@for`
- Native Fetch API for mock data

## How to Run

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Project Structure

```
src/app/
  layout/          # Shell: header, breadcrumbs, footer
  pages/
    home-page/     # Catalog with search and film cards
    details-page/  # Full film info
    about/         # About page
  services/films/  # Global films service (signal-based)
  features/films/  # Resolver
  pipes/           # DurationPipe
  models/          # Film interface
public/
  films.json       # Mock data (12 films)
```

## Author

Dzmitry Aliakseyeu — [GitHub](https://github.com/DzmitryAliakseyeu)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
