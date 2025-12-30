import { Board } from "./components/game/Board";
import { useGameStore } from "./store/useGameStore";

function App() {
  const styleButton = "px-4 py-2 text-white rounded-md transition";

  return (
    <>
      <div className="text-2xl font-bold text-center mt-10">
        Merge Game
      </div>

      <Board/>

      <div className="flex justify-center gap-2">
        <button 
          className={`${styleButton} bg-blue-500 hover:bg-blue-600`}
          onClick={() => useGameStore.getState().debugAddItem()}>debugAddItem
        </button>
        <button 
          className={`${styleButton} bg-red-500 hover:bg-red-600`}
          onClick={() => useGameStore.getState().debugDeleteItem()}>debugDeleteItem
        </button>
      </div>
    </>
  );
}

export default App;