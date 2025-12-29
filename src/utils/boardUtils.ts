import type { GridSlot } from "../types/game";

export const createEmptyBoard = (size: number = 64): GridSlot[] => {
  return Array.from({ length:size }, (_, index) => {
    return {
      id: `slot_${index}`,
      index: index,
      item: null,
      isLocked: false,
    };
  });
};