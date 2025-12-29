import type { ItemDefinition } from "../types/game";

export const CATEGORY_SHAPES = 'shapes';

/**
 * Dicionário de Itens - Tema Geométrico
 * Cores seguem o espectro visível (Vermelho -> Violeta)
 * Valores seguem crescimento exponencial (~x2.2 por nível)
 */
export const ITEMS_DICTIONARY: Record<string, ItemDefinition> = {
  // --- NÍVEL 1 ---
  'triangle_1': {
    id: 'triangle_1',
    name: 'Triângulo',
    level: 1,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'square_2',
    value: 1,
    image: 'bg-red-500'
  },
  // --- NÍVEL 2 ---
  'square_2': {
    id: 'square_2',
    name: 'Quadrado',
    level: 2,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'pentagon_3',
    value: 4,
    image: 'bg-orange-500'
  },
  // --- NÍVEL 3 ---
  'pentagon_3': {
    id: 'pentagon_3',
    name: 'Pentágono',
    level: 3,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'hexagon_4',
    value: 10,
    image: 'bg-amber-500'
  },
  // --- NÍVEL 4 ---
  'hexagon_4': {
    id: 'hexagon_4',
    name: 'Hexágono',
    level: 4,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'heptagon_5',
    value: 25,
    image: 'bg-yellow-400'
  },
  // --- NÍVEL 5 ---
  'heptagon_5': {
    id: 'heptagon_5',
    name: 'Heptágono',
    level: 5,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'octagon_6',
    value: 60,
    image: 'bg-lime-500'
  },
  // --- NÍVEL 6 ---
  'octagon_6': {
    id: 'octagon_6',
    name: 'Octágono',
    level: 6,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'circle_7',
    value: 140,
    image: 'bg-green-500'
  },
  // --- NÍVEL 7 ---
  'circle_7': {
    id: 'circle_7',
    name: 'Círculo',
    level: 7,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'diamond_8',
    value: 320,
    image: 'bg-emerald-500'
  },
  // --- NÍVEL 8 ---
  'diamond_8': {
    id: 'diamond_8',
    name: 'Diamante',
    level: 8,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'star_9',
    value: 750,
    image: 'bg-teal-500'
  },
  // --- NÍVEL 9 ---
  'star_9': {
    id: 'star_9',
    name: 'Estrela',
    level: 9,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'david_star_10',
    value: 1800,
    image: 'bg-cyan-500'
  },
  // --- NÍVEL 10 ---
  'david_star_10': {
    id: 'david_star_10',
    name: 'Estrela de Davi',
    level: 10,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'heart_11',
    value: 4000,
    image: 'bg-sky-500'
  },
  // --- NÍVEL 11 ---
  'heart_11': {
    id: 'heart_11',
    name: 'Coração',
    level: 11,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: 'life_flower_12',
    value: 9000,
    image: 'bg-indigo-500'
  },
  // --- NÍVEL 12 (Máximo) ---
  'life_flower_12': {
    id: 'life_flower_12',
    name: 'Flor da Vida',
    level: 12,
    categoryId: CATEGORY_SHAPES,
    mergeResultId: undefined, // Fim da linha evolutiva
    value: 25000, // Valor "Legendary"
    image: 'bg-purple-600'
  },
};

// Helper para transformar o Dicionário em Array quando precisarmos listar tudo
export const ALL_ITEMS = Object.values(ITEMS_DICTIONARY);