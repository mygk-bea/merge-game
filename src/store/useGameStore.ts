import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createEmptyBoard } from '../utils/boardUtils';
import type { GameState } from '../types/game';

interface GameActions {
  addCoins: (amount: number) => void;
  // ...
  debugDeleteItem: () => void;
  debugAddItem: () => void;
  resetGame: () => void;
}

// Unimos o Estado (Dados) + Ações (Funções)
type GameStore = GameState & GameActions;

const INITIAL_STATE: GameState = {
  board: createEmptyBoard(64),
  inventory: createEmptyBoard(8),
  resources: {
    coins: 0,
    gems: 0,
    energy: 50,
    maxEnergy: 100,
  },
  level: 1,
  xp: 0,
};

export const useGameStore = create<GameStore>()(
  persist(
    (set) => ({
      ...INITIAL_STATE,
      addCoins: (amount) => {
        set((state) => ({ 
          resources: {
            ...state.resources,
            coins: state.resources.coins + amount
          },
        }))
      },

      debugDeleteItem: () => {
        set((state) => {
          const newBoard = [...state.board];
          const filledIndex = newBoard.findIndex(slot => slot.item !== null);

          if (filledIndex !== -1) {
            newBoard[filledIndex] = {
              ...newBoard[filledIndex],
              item: null,
            };
          }

          return { board: newBoard }
        });
      },

      debugAddItem: () => {
        set((state) => {
          const newBoard = [...state.board];
          const emptyIndex = newBoard.findIndex(slot => slot.item === null);

          if (emptyIndex !== -1) {
            newBoard[emptyIndex] = {
              ...newBoard[emptyIndex],
              item: {
                id: crypto.randomUUID(),
                definitionId: 'pentagon_3',
              }
            };
          }

          return { board: newBoard }
        })
      },

      resetGame: () => {
        set(INITIAL_STATE);
      },
    }),
    {
      name: 'merge-game-storage',
      storage: createJSONStorage(() => localStorage), // Define onde salvar
      // Dica pro: podemos blacklist/whitelist campos aqui depois
    }
  )
);