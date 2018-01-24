# bonham-ui

> A Vue.js PWA

Project Structure:

- bonham-ui

  - node_modules

  - src (actual project)
        - assets (global scss, e.g. colors.scss)
        - components (only *.vue files)
        - store
            - modules
            - mutation_types.js (contains all mutation types)
            - index.js
        - utils (validators and other helper functions)
        - main.js
    - static (manifest.json, images, etc.)
    - index.html
    - package.json
    - *rc(.js) files (babel, eslint, postcss, browserslist, ...)
    - README.md

Naming Conventions:

- Components:
  - Files:  PascalCase (e.g. NavBar.vue)
  - Name: kebab-case (e.g. name: 'nav-bar')
