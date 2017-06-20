# bonham-ui

> A Vue.js PWA


Project Structure:
- bonham-ui
    - build (webpack build configurations)
    - config (webpack environment configurations)
    - node_modules
    - src (actual project)
        - assets (global scss, e.g. colors.scss)
        - components (only *.vue files)
        - utils (validators and other helper functions)
        - main.js
    - static (manifest.json, images, etc.)
    - index.html
    - package.json
    - *rc files (babel, eslint, postcss, ...)
    - README.md


Naming Conventions:
- Components:
    - Files:  PascalCase (e.g. NavBar.vue)
    - Name: kebap-case (e.g. name: 'nav-bar')
