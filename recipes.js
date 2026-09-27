// Archivo de recetas base para GastroOS
// Edita este archivo directamente en GitHub para añadir o modificar tu recetario.

/*
VALORES PERMITIDOS POR CAMPO:
- categoria: "Primero" | "Segundo"
- subcategoria (solo Primeros): "Legumbres" | "Guisos" | "Sopas / caldos" | "Cremas" | "Verduras enteras" | "Pastas" | "Pastas rellenas" | "Arroces" | "Otros hidratos"
- proteina (solo Segundos): "Carne" | "Pescado"
- tipoAnimal (solo Carnes): "Pollo" | "Pavo" | "Cerdo" | "Ternera" | "Conejo" | "Cordero"
- especiePescado (solo Pescados): "Merluza" | "Salmón" | "Bacalao" | "Dorada" | "Lubina" | "Atún" | "Calamares" | "Sepia" | "Sardina" | "Caballa" | "Otro (especificar)"
- tecnicaCocina (solo Segundos): "Guiso / En salsa" | "Plancha / Asado / Brasa" | "Frito / Rebozado / Empanado"
- demanda: "Alta" | "Media" | "Baja"
*/

const DEFAULT_RECIPES = [
  // Ejemplo 1: Primero (Verdura)
  {
    id: "rec_001",
    nombre: "Judías verdes salteadas con jamón",
    categoria: "Primero",
    subcategoria: "Verduras enteras",
    ingredientePrincipal: "judias_verdes",
    demanda: "Media",
    esPrecocinado: false,
    ingredientes: []
  },
  
  // Ejemplo 2: Primero (Crema)
  {
    id: "rec_002",
    nombre: "Crema de calabaza asada",
    categoria: "Primero",
    subcategoria: "Cremas",
    ingredientePrincipal: "calabaza",
    demanda: "Media",
    esPrecocinado: false,
    ingredientes: []
  },
  
  // Ejemplo 3: Segundo Carne (Opción 1)
  {
    id: "rec_003",
    nombre: "Pechuga de pollo a la plancha",
    categoria: "Segundo",
    proteina: "Carne",
    tipoAnimal: "Pollo",
    tecnicaCocina: "Plancha / Asado / Brasa",
    demanda: "Media",
    esPrecocinado: false,
    ingredientes: []
  },

  // Ejemplo 4: Segundo Carne (Opción 2)
  {
    id: "rec_004",
    nombre: "Estofado de ternera tradicional",
    categoria: "Segundo",
    proteina: "Carne",
    tipoAnimal: "Ternera",
    tecnicaCocina: "Guiso / En salsa",
    demanda: "Alta",
    esPrecocinado: false,
    ingredientes: []
  },

  // Ejemplo 5: Segundo Pescado
  {
    id: "rec_005",
    nombre: "Merluza a la romana",
    categoria: "Segundo",
    proteina: "Pescado",
    especiePescado: "Merluza",
    tecnicaCocina: "Frito / Rebozado / Empanado",
    demanda: "Alta",
    esPrecocinado: false,
    ingredientes: []
  }
];
