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
