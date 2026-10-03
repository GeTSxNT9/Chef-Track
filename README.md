# 📖 GastroOS

**Web Operating System for Recipe Management, Menu Planning, and Stock Control.**
*Unified PWA single-file architecture with local persistence and optional GitHub synchronization.*

---

<p align="left">
  <a href="#"><img src="https://img.shields.io/badge/Architecture-Single--File%20SPA-000000?style=for-the-badge&logo=apple&logoColor=white" alt="Architecture"></a>
  <a href="#"><img src="https://img.shields.io/badge/Storage-localStorage%20%2B%20GitHub%20API-24292e?style=for-the-badge&logo=github&logoColor=white" alt="Storage"></a>
  <a href="#"><img src="https://img.shields.io/badge/Design-Apple%20Minimalist-000000?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Design"></a>
</p>

---

## 📸 Overview

**GastroOS** is a web application (**Single Page Application**) developed with **HTML5, CSS, and JavaScript**, designed to centralize recipe management, weekly menu planning, ingredient control, stock management, and shopping list generation in a single interface.

The application follows a **single-file architecture**, keeping the main interface and application logic inside `index.html`, while recipe data is maintained separately in `recipes.json`.

The system is designed to operate primarily on the client side, without requiring a dedicated backend server for its core functionality.

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

### 6. 💾 Data Persistence

GastroOS uses **browser LocalStorage** for local application persistence.

This allows the application to retain relevant information between sessions without requiring a dedicated database or backend service for its core operation.

The architecture is therefore suitable for static hosting environments such as GitHub Pages.

---

### 7. ☁️ GitHub Integration

GitHub integration provides remote synchronization for recipe data.

The application can work with a configured GitHub repository to synchronize recipe changes while maintaining the main application as a client-side web application.

Authentication credentials and tokens must be handled securely and should never be committed directly to the repository.

---

## 🧩 Application Structure

```text
GastroOS/
├── index.html
├── recipes.json
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
* GitHub integration.

### `recipes.json`

Contains the application's recipe collection and associated recipe data.

Keeping recipe data separate from the main application makes it easier to maintain and expand the recipe database.

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

---

## 🔐 Security

GitHub tokens and other credentials must be treated as sensitive information.

They should not be:

* Committed to the repository.
* Embedded in public source code.
* Published in the README.
* Shared through screenshots or documentation.

The appropriate GitHub authentication and permission mechanisms should be used for repository synchronization.

---

## 📌 Project Summary

GastroOS combines **recipe management, automated menu planning, ingredient control, stock management, shopping lists, history, and GitHub synchronization** in a single client-side application.

Its main objective is to automate the repetitive parts of weekly meal planning while keeping the entire process accessible and manually controllable from one interface.
