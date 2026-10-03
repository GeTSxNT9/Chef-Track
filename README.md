# 📖 GastroOS

**Web Operating System for Recipe Management, Menu Planning, and Stock Control.**  
*Progressive Web App architecture with local persistence, offline caching, and optional GitHub synchronization.*

---

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Architecture-PWA-000000?style=flat-square&logo=apple&logoColor=white" alt="Architecture"></a>
  <a href="#"><img src="https://img.shields.io/badge/Storage-localStorage%20%2B%20GitHub%20API-24292e?style=flat-square&logo=github&logoColor=white" alt="Storage"></a>
  <a href="#"><img src="https://img.shields.io/badge/Design-Apple%20Minimalist-000000?style=flat-square&logo=tailwindcss&logoColor=white" alt="Design"></a>
</p>

---

## 📸 Overview

**GastroOS** is a web application (**Progressive Web App**) developed with **HTML5, CSS, and JavaScript**, designed to centralize recipe management, weekly menu planning, ingredient control, stock management, and shopping list generation in a single interface.

The application uses a lightweight web architecture where the main interface and application logic are contained in `index.html`, while recipe data, PWA configuration, service-worker caching, and application icons are maintained as separate files.

The system is designed to operate primarily on the client side, without requiring a dedicated backend server for its core functionality. When no local recipe collection is available, `recipes.json` is used as the initial recipe seed; a configured GitHub repository takes precedence as the shared remote source.

---

## 🛠️ Technical Architecture & Modules

### 1. 🟩 Master Recipe Book

The recipe book is managed through structured JSON data and provides the foundation for the rest of the application.

* **Recipe Management:** Creation, editing, deletion, and organization of recipes.
* **Classification:** Recipes contain the information required by the planning engine.
* **Ingredients:** Ingredients, quantities, units, and related data are stored with each recipe.
* **Allergens:** Recipes can include allergen information.
* **Individual Editing:** Recipes can be modified while preserving their internal identifiers.
* **Bulk Editing:** Multiple recipes can be updated simultaneously.
* **Filtering & Selection:** Recipes can be filtered and selected directly from the interface.
* **Recipe Health:** A diagnostic view reports incomplete technical tags, duplicate IDs, and blank ingredient quantities.
* **Change History:** A local audit log records recipe creation, edits, deletions, imports, and tagging operations.
* **GitHub Synchronization:** Recipe data can be synchronized with the configured GitHub repository.

---

### 2. 📅 Menu Planning Engine

The planning engine automatically generates weekly menus from the available recipe collection.

It uses a constraint-based generation and validation system to ensure that generated menus comply with the application's planning logic.

Main capabilities include:

* Automatic weekly menu generation.
* Full-menu validation before accepting a generated plan.
* Individual day regeneration.
* Manual dish replacement.
* Protection against incompatible combinations.
* Variety management using previously saved menus.
* Retry-based generation when a candidate menu is invalid.
* Duplicate historical-menu warning before saving the same menu again.

Generated menus are only committed once the complete weekly plan has passed validation.

---

### 3. 🛒 Shopping & Ingredient Management

The shopping system connects the weekly menu with the ingredients required by its recipes.

It provides:

* Automatic shopping list generation.
* Ingredient grouping.
* Quantity aggregation when applicable.
* Ingredient categorization.
* Support for manually specified quantities.
* Integration with available stock.

Ingredients without a defined quantity remain visible in the shopping list but are treated as non-calculable quantities.

---

### 4. 📦 Stock Control

GastroOS includes stock management to keep track of products already available.

Stock can be managed independently from the recipe collection and is taken into account when preparing shopping requirements.

The system supports both **raw/unprepared products** and **prepared products**.

---

### 5. 🔄 History & Menu Rotation

Saved weekly menus are stored locally and used as historical references for future planning.

This allows the planning engine to avoid simply reproducing previous menu patterns.

Only explicitly saved menus are considered part of the planning history. A generated menu that has not been saved does not become a historical reference.

---

### 6. 💾 Data Persistence & Backup

GastroOS uses **browser LocalStorage** for local application persistence.

The application includes:

* Full JSON export.
* Recipe-only export.
* Automatic local backup snapshots before destructive/restorative operations.
* Download of the latest automatic backup.
* Import/restore with a preview before applying changes.
* Safe JSON loading so malformed local storage entries do not crash initialization.

This allows the application to retain relevant information between sessions without requiring a dedicated database or backend service for its core operation.

The architecture is therefore suitable for static hosting environments such as GitHub Pages.

---

### 7. ☁️ GitHub Integration

GitHub integration provides remote synchronization for recipe data.

The application can work with a configured GitHub repository to synchronize recipe changes while maintaining the main application as a client-side web application.

The settings view also shows whether local recipe changes are pending synchronization or whether the current recipe collection matches the last confirmed GitHub snapshot.

Authentication credentials and tokens must be handled securely and should never be committed directly to the repository.

---

### 8. 📡 PWA & Offline Cache

GastroOS uses a real external Service Worker in `sw.js`.

The Service Worker caches the application shell, recipe data, manifest, and icon assets and uses a network-first strategy with cached fallback for same-origin resources. External services such as the GitHub API and CDN resources are not cached by the Service Worker.

This provides an offline fallback for the core static application shell when the browser has previously loaded the application. The application still depends on its external Tailwind CDN resource for styling, so this should not be interpreted as a guarantee of fully self-contained offline rendering.

The application remains installable through `manifest.json`.

---

## 🧩 Application Structure

```text
GastroOS/
├── index.html
├── recipes.json
├── manifest.json
├── sw.js
├── favicon-32.png
├── apple-touch-icon.png
├── icon-192.png
├── icon-512.png
└── README.md
```

### `index.html`

Contains the main application:

* User interface.
* Styling.
* Application logic.
* Menu planning engine.
* Recipe management.
* Shopping and stock functionality.
* Local persistence.
* Backup and restore workflow.
* Diagnostics and recipe change history.
* GitHub integration.

### `recipes.json`

Contains the application's recipe collection and associated recipe data. It also acts as the initial local recipe seed when the browser has no stored recipes and GitHub is not available.

Keeping recipe data separate from the main application makes it easier to maintain and expand the recipe database.

### `manifest.json`

Contains the Progressive Web App configuration, including application metadata and references to the external application icons.

### `sw.js`

Contains the Service Worker responsible for application-shell caching and offline fallback.

### Application Icons

The application uses external image files for browser, mobile, and PWA icons:

* `favicon-32.png`
* `apple-touch-icon.png`
* `icon-192.png`
* `icon-512.png`

Keeping the icons as separate assets avoids embedding image data directly into `index.html`.

---

## ⚙️ Planning Workflow

The menu planning process follows a generate → validate → accept workflow:

```text
Recipe Collection
       ↓
Candidate Generation
       ↓
Constraint Processing
       ↓
Full Menu Validation
       ↓
Valid Menu
```

Invalid candidates are discarded and alternative combinations are generated.

The same validation approach is used when regenerating individual days or manually replacing dishes, ensuring that changes are compatible with the complete weekly menu.

Current planning engine:

`menu-rules-v10-constraint-retry`

---

## 🎨 Design Philosophy

GastroOS follows an **Apple-inspired minimalist interface**, prioritizing:

* Clear visual hierarchy.
* Simple navigation.
* Compact information density.
* Consistent controls.
* Responsive layouts.
* Minimal visual clutter.

The interface is designed to keep recipe management, planning, stock, and shopping workflows within the same application rather than separating them into independent tools.

---

## 🚀 Deployment

GastroOS can be deployed as a static web application through **GitHub Pages**.

The deployment workflow is:

```text
Source Files
     ↓
Git Repository
     ↓
GitHub Pages
     ↓
Published Web Application
```

No dedicated backend server is required for the application's core functionality.

For the Service Worker to operate, the application must be served over **HTTPS** (GitHub Pages satisfies this requirement) or from a local development environment that supports Service Workers.

---

## 🔐 Security

GitHub tokens and other credentials must be treated as sensitive information.

They should not be:

* Committed to the repository.
* Embedded in public source code.
* Published in the README.
* Shared through screenshots or documentation.

The appropriate GitHub authentication and permission mechanisms should be used for repository synchronization.

Because the application is client-side, a GitHub token stored in browser LocalStorage remains accessible to JavaScript running in that origin. Use a least-privilege fine-grained token and avoid installing untrusted scripts/extensions on the same origin.

---

## 📌 Project Summary

GastroOS combines **recipe management, automated menu planning, ingredient control, stock management, shopping lists, history, diagnostics, backup/restore, and GitHub synchronization** in a client-side Progressive Web App.

Its main objective is to automate the repetitive parts of weekly meal planning while keeping the entire process accessible and manually controllable from one interface.
