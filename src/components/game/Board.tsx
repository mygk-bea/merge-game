import { useGameStore } from "../../store/useGameStore";
import { GameItem } from "./GameItem";

export const Board = () => {
  const board = useGameStore((state) => state.board);

  return (
    <div className="p-4 bg-slate-100 rounded-xl shadow-inner">
      <div className="grid grid-cols-8 gap-2 aspect-square max-w-md mx-auto">
        {board.map((slot) => (
          <div 
            key={slot.id} 
            className="bg-slate-300 rounded-lg aspect-square relative flex items-center justify-center"
          >
            {slot.item && <GameItem item={slot.item} />}
            
            {/* Index para debug */}
            <span className="absolute bottom-0 right-1 text-[8px] text-slate-500 pointer-events-none">
              {slot.index}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};