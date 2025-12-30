import type { GameItem as GameItemType } from "../../types/game";
import { ITEMS_DICTIONARY } from "../../constants/items";
import { clsx } from "clsx";

interface GameItemProps {
  item: GameItemType;
}

export const GameItem = ({ item }: GameItemProps) => {
  const definition = ITEMS_DICTIONARY[item.definitionId]; 
  if (!definition) return null;

  return (
    <div className={clsx(
      "w-full h-full rounded-md shadow-sm transition-transform hover:scale-105 cursor-pointer",
      "flex items-center justify-center text-xs font-bold text-white select-none",
      definition.image
    )}>
      {definition.level}
    </div>
  );
};