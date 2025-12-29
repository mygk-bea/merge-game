export type ItemId = string; // ex: 'uuid-1234'
export type CategoryId = string; // ex: 'shapes'

export interface ItemDefinition {
  id: string;
  name: string;
  level: number; // O nível é fixo pois ao upar ele vira outro item
  categoryId: CategoryId;
  mergeResultId?: string;
  value: number; // Quanto vale em moedas
  image: string;
}

export interface GameItem {
  id: ItemId;
  definitionId: string; // Link para a definição (ex: 'triangle_1')
  isBubbled?: boolean; 
  /* 
  * Alguns merges podem criar itens extras (além do merge principal) em bolhas;
  * O jogador deve escolher entre pagar (para recuperar o item) ou negar (para liberar o slot ocupado);
  * Essas opções aparecem ao selecionar o item bolhado;
  * Caso o jogador não faça nada o item deve desaparecer após um tempo.
  */
}

/** Array linear (0 a 63) visualizado como grid. */
export interface GridSlot {
  id: string;
  index: number;
  item: GameItem | null; // Pode estar vazio ou ter um item
  isLocked: boolean; // Slots bloqueados que precisam de dinheiro/nível/diamantes para abrir
}

export interface GameState {
  board: GridSlot[];
  inventory: GridSlot[];
  resources: {
    coins: number;
    gems: number;
    energy: number;
    maxEnergy: number;
  };
  level: number;
  xp: number;
}