# 📖 GastroOS

**Web Operating System for Recipe Management, Menu Planning, and Stock Control.**
*Progressive Web App architecture with local persistence and optional GitHub synchronization.*

---

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Architecture-PWA-000000?style=flat-square&logo=apple&logoColor=white" alt="Architecture"></a>
  <a href="#"><img src="https://img.shields.io/badge/Storage-localStorage%20%2B%20GitHub%20API-24292e?style=flat-square&logo=github&logoColor=white" alt="Storage"></a>
  <a href="#"><img src="https://img.shields.io/badge/Design-Apple%20Minimalist-000000?style=flat-square&logo=tailwindcss&logoColor=white" alt="Design"></a>
</p>

---

## 📸 Overview

**GastroOS** is a web application (**Progressive Web App**) developed with **HTML5, CSS, and JavaScript**, designed to centralize recipe management, weekly menu planning, ingredient control, stock management, and shopping list generation in a single interface.

The application uses a lightweight web architecture where the main interface and application logic are contained in `index.html`, while recipe data, PWA configuration, and application icons are maintained as separate files.

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
├── manifest.json
├── favicon-32.png
├── apple-touch-icon.png
├── icon-192.png
├── icon-512.png
└── README.md
