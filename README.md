# Roflworks

This repository contains a small web project built with **React** and **Vite**. The site currently displays a landing page with an animated title and a dark theme.

## About the code

All source files live in the `src` directory and are structured by components and pages:

- `components/` – standalone interface blocks such as the header and footer
- `pages/` – application pages (currently only the home page)
- `styles/` – styles based on **styled-components**
- `theme.jsx` – color theme definition
- `main.jsx` – React entry point

The project uses **react-router** for routing and **styled-components** for styling elements.

## Installation

1. Install [Node.js](https://nodejs.org/) (version 18 or newer is recommended).
2. Clone the repository and navigate into it:
   ```bash
   git clone <repository-url>
   cd roflworks
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
   After launch the app will be available at the address printed by Vite (typically http://localhost:5173).

To build an optimized version use `npm run build`.

## License

This project is distributed under the [MIT](LICENSE) license.
