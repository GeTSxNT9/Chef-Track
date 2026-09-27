<div align="center">

  # GastroOS
  **The intelligent weekly menu planning engine for high-volume kitchens (150–200 daily diners)**

  [![PWA Ready](https://img.shields.io/badge/PWA-Ready-007AFF?style=for-the-badge&logo=pwa&logoColor=white)](https://getsxnt9.github.io/GastroOS/)
  [![UI Design](https://img.shields.io/badge/Design-Apple_HIG-000000?style=for-the-badge&logo=apple&logoColor=white)](#tech-stack)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

  <br />

  [**Live Demo**](https://getsxnt9.github.io/GastroOS/) &nbsp;•&nbsp; [**Architecture & Rules**](#algorithm-logic--rules) &nbsp;•&nbsp; [**Key Features**](#key-features)

</div>

---

## Project Vision

**GastroOS** is a high-performance Progressive Web App (PWA) engineered for head chefs and institutional catering managers. Unlike traditional static recipe managers, **GastroOS** operates as a smart algorithmic engine that automates weekly menu creation (Monday through Friday), guaranteeing strict nutritional balance, culinary logic, and repetition control.

---

## Key Features

* **Apple HIG-Inspired UI**: Clean, glassmorphic aesthetic with crystal-clear typography and high-ergonomics touch controls tailored for fast-paced kitchen environments.
* **Strict 3x3 Daily Structure**:
  * **3 Starters**: `1st Vegetable` + `1st Spoon/Soup` + `1st Fork/Carbs`.
  * **3 Mains**: `2nd Meat (Option 1)` + `2nd Meat (Option 2)` + `2nd Fish (Mandatory)`.
* **Smart Rotation Engine**: Intra-day and inter-day heuristic filtering to prevent protein overlap, limit fried foods, and enforce species rotation.
* **2-Tier Fallback System**: Progressive rule relaxation if the user's recipe collection is limited, strictly preserving weekly dish ID uniqueness and daily animal variety.
* **Zero Server / 100% Offline**: Privacy-first. Runs entirely in client storage (`localStorage` / `IndexedDB`) with zero external API dependencies.
* **Retroactive Tagging Tool**: Seamless modal interface to classify legacy recipes with subcategories, exact fish species, and cooking techniques.

---

## Daily Menu Matrix (3x3)

| Slot | Category | Subcategories |
| :--- | :--- | :--- |
| **1st Course** | **Vegetables** | `verdura_entera` (Whole/Sautéed) \| `verdura_crema` (Cream/Purée) |
| **1st Course** | **Spoon / Stews** | `cuchara_legumbres` (Legumes) \| `cuchara_guisos` (Stews) \| `cuchara_sopas_caldos` (Soups/Broths) |
| **1st Course** | **Fork / Carbs** | `pasta_corta_larga` \| `pasta_rellena_horno` \| `arroz` \| `otros_hidratos` |
| **2nd Course** | **Meat Option 1** | Animal A + (`tecnica_guiso` \| `tecnica_seco_asado` \| `tecnica_frito_rebozado`) |
| **2nd Course** | **Meat Option 2** | **Animal B (Different)** + Complementary Technique |
| **2nd Course** | **Fish (Mandatory)**| `pescado` (**Mandatory daily** with explicit species tracking) |

---

## Algorithm Logic & Rules

### 1. Intra-Day Constraints (Same Day)
* **Protein Diversity**: Prohibited to serve the same animal type twice in a single day (e.g., *Chicken + Chicken*).
* **Technique Balance**: Prohibited to pair two stewed meats or two fried/breaded options on the same day.

### 2. Inter-Day Constraints (Consecutive Days)
* **Fish Rotation**: Daily fish is mandatory, but **repeating the exact same species on consecutive days is forbidden** (e.g., *Hake* Tuesday ➔ *Cod* Wednesday).
* **Meat Caps**: Maximum **2 consecutive days** featuring the same animal species.
* **Legumes & Cream Soups**: Forbidden on consecutive days (`cuchara_legumbres` & `verdura_crema`).
* **Weekly Fried Food Limit**: Maximum **2 fried/breaded dishes per week** across the entire mains menu.

---

## Tech Stack

* **Core**: HTML5, Modern JavaScript (ES6+ Modules), PWA Service Workers
* **UI & Styling**: Tailwind CSS (Apple Human Interface Guidelines)
* **Icons**: Lucide Icons / Heroicons
* **Storage**: Web Storage API (`localStorage` / `IndexedDB`)
* **Hosting**: GitHub Pages

---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/GeTsSxNT9/GastroOS.git](https://github.com/GeTsSxNT9/GastroOS.git)
   cd GastroOS
