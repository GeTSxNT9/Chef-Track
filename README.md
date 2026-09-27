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

**GastroOS** is a high-performance Progressive Web App (PWA) engineered by a solo chef responsible for single-handedly preparing 6 distinct dishes daily for 150–200 diners. Unlike traditional static recipe managers, **GastroOS** acts as an operational decision engine—automating weekly menu creation (Monday through Friday) while guaranteeing strict nutritional balance, culinary logic, texture compatibility, and zero-repetition rules with no administrative overhead.

---

## Key Features

* **Solo-Operator Optimized**: Built specifically for single-chef operations executing an entire 6-dish daily menu, drastically eliminating decision fatigue and planning friction.
* **Apple HIG-Inspired UI**: Clean, glassmorphic aesthetic with crystal-clear typography and high-ergonomics touch controls tailored for fast-paced kitchen environments.
* **Strict 3x3 Daily Structure**:
  * **3 Starters**: `1st Vegetable` + `1st Spoon/Soup` + `1st Fork/Carbs`.
  * **3 Mains**: `2nd Meat (Option 1)` + `2nd Meat (Option 2)` + `2nd Fish (Mandatory)`.
* **Advanced Heuristic Engine**: Enforces strict intra-day texture compatibility, zero weekly vegetable duplication, species rotation, and technique caps.
* **Inter-Week Memory System**: Stores historical menus to alter weekly structures dynamically, preventing copy-paste template fatigue.
* **2-Tier Fallback System**: Progressive rule relaxation if the user's recipe collection is limited, strictly preserving weekly dish ID uniqueness and daily meat variety.
* **Zero Server / 100% Offline**: Privacy-first. Runs entirely in client storage (`localStorage` / `IndexedDB`) with zero external API dependencies.

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
* **Protein Diversity in Mains**: Prohibited to serve the same animal species across both meat mains on the same day (e.g., *Pork + Pork* is forbidden). Meat derivatives in starters (e.g., ham in vegetables) do not block animal selection for mains.
* **Liquid Texture Incompatibility**: Prohibited to pair two liquid/puréed starters on the same day (`verdura_crema` and `cuchara_sopas_caldos` cannot co-exist in the same daily menu).
* **Technique Balance**: Prohibited to offer two stewed meats or two fried options on the same day.

### 2. Inter-Day & Weekly Constraints (Monday to Friday)
* **Zero Weekly Vegetable Repetition**: Strict veto on repeating the main vegetable ingredient in the `1st Vegetable` slot across the entire 5-day week (e.g., Green Beans on Monday vetoes Green Beans for the rest of the week).
* **Fish Rotation**: Daily fish is mandatory, but **repeating the exact same species on consecutive days is forbidden**.
* **Meat Caps & Techniques**: Maximum **2 consecutive days** featuring the same animal species. Stewed meats (`tecnica_guiso`) are strictly capped at **2–3 per week**, and fried foods (`tecnica_frito_rebozado`) at **max 2 per week**.
* **Legumes & Cream Soups**: Forbidden on consecutive days (`cuchara_legumbres` & `verdura_crema`).

### 3. Inter-Week Memory (Anti-Template System)
* **Historical Memory**: Persists the previous week's generated menu (`previousWeekMenu`) in local storage. When generating a new week, the engine alters the menu layout and subcategory sequence to prevent pattern repetition.

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
