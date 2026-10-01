# 📖 GastroOS

> **Web Operating System for Recipe Management, Menu Planning, and Stock Control.**  
> *Unified PWA single-file architecture application with remote synchronization via GitHub API.*

---

[![Architecture](https://img.shields.io/badge/Architecture-Single--File%20SPA-000000?style=for-the-badge&logo=apple&logoColor=white)](#)
[![Storage](https://img.shields.io/badge/Storage-localStorage%20%2B%20GitHub%20API-24292e?style=for-the-badge&logo=github&logoColor=white)](#)
[![Design](https://img.shields.io/badge/Design-Apple%20Minimalist-000000?style=for-the-badge&logo=tailwindcss&logoColor=white)](#)

---

## 📸 Overview

**GastroOS** is a web application (*Single Page Application*) natively developed in **HTML5, CSS, and JavaScript**, packaged in a single-file architecture. It is designed for catering, institutional, and restaurant environments requiring agile weekly menu planning, stock control, and nutritional balance without the complexity or dependency of heavy external servers.

---

## 🛠️ Technical Architecture & Modules

### 1. 📗 Master Recipe Book
Recipes are managed as JSON object data structures with complete classification metadata:
* **Internal Identifiers (`id`):** Independent of the visual layer to prevent reference errors.
* **Structural Classification:** Dish definition (First / Second Course), category, technical subcategory, and tags.
* **Operational Properties:** Demand level, weighted ingredients, and associated quantities.
* **Allergen Profile:** Integrated registration of official allergen declarations configured via interactive checkboxes during recipe creation and editing.
* **Individual Editing:** Complete editing of individual recipes while preserving their internal identifiers and associated data.
* **Bulk Editing:** Multiple recipes can be selected and updated simultaneously, modifying a specific property while preserving all other recipe data.
* **Bulk Selection:** Recipes can be selected individually or through the visible filtered recipe list.
* **GitHub Synchronization:** Bulk recipe changes are synchronized with the configured GitHub repository.

### 2. 🔄 Remote Synchronization (GitHub API REST)
GastroOS uses GitHub as its centralized, persistent database:
* **Hybrid Structure:** 
  * `GitHub Repository` ➔ **Master Data Source** (`recipes.json`).
  * `localStorage` ➔ **High-Performance Browser Cache & Local Storage**.
* **CRUD Operations:** Two-way synchronization via HTTP `GET` (read/download) and `PUT` (write/commit) requests with header authentication.
* **Multi-Device Access:** Allows working with the same recipe book in a centralized manner across different devices or browsers.
* **Bulk Operations:** Multiple recipe changes can be consolidated into a single GitHub commit.

### 3. 🎲 Intelligent Planning Engine
The analytical generator evaluates the active recipe book, storage inventory, and demand forecasts to generate balanced weekly menu proposals:
* **Daily Balance:** Distribution of 3 first courses (1 Vegetable, 1 Spoon dish, 1 Fork dish) and 3 second courses (1 Fish, 2 Meats).
* **Nutritional Variety Control:** Algorithm ensuring zero repetition of fish species or vegetable families within the same week, strict limits on fried foods, and rotation of animal protein types.
* **Utilization & Rotation:** Priority integration of raw materials in stock and pre-cooked inventory items.
* **Replacement Matrix:** Allows dynamic manual substitutions per dish.

### 4. 📦 Stock & Forecast Management
* **Categorized Inventory:** Classification and organization of raw materials and prepared dishes.
* **Proportion Calculation:** Safety margin applied over diner forecasts for automatic production portion adjustments.
* **Order Generator:** Consolidation of required ingredients grouped into 6 logistical categories: *Meat, Fish, Dairy, Fruits & Vegetables, Dry Goods, and Frozen*.

### 5. 💾 Data Persistence & Portability
* **Environment Isolation:** GitHub connection credentials are stored independently of local database data to allow local storage clearing without losing the configured connection.
* **Backup & JSON Exchange:** Import and export module for `.json` files to create manual backups or execute quick migrations between environments.

### 6. 📱 Interface and UX (SPA)
* **Single-File Architecture:** The entire application (structure, styles, and reactivity) is contained within a single executable file in any modern browser without prior compilation.
* **Responsive Design:** Smooth adaptation for mobile devices, tablets, and desktop displays.
* **Adaptive Dark Mode:** Integrated aesthetic contrast switcher.
* **Recipe Management UX:** Individual and bulk recipe editing workflows are integrated directly into the Recipe Book interface.

---

## 🔐 Security & Permissions

To enable remote sync:
1. Uses a **Fine-grained Personal Access Token (PAT)** from GitHub.
2. Required permissions are strictly limited to the scope of the repository where the recipe book resides (`Contents: Read & Write`).
3. The token is stored locally and non-transferably in the user's browser `localStorage`.

---

## 📋 Data Flow Summary

```text
  ┌─────────────────────────────────────────────────────────┐
  │                       GastroOS                          │
  │                     (Browser / SPA)                     │
  └────────────┬───────────────────────────────▲────────────┘
               │                               │
    [PUT] Save Recipe                 [GET] Load Recipe Book
               │                               │
               ▼                               │
  ┌────────────────────────────────────────────┴────────────┐
  │                    GitHub REST API                      │
  │                 (Repository / master)                   │
  └────────────────────────────┬────────────────────────────┘
                               │
                               ▼
                       [ recipes.json ]