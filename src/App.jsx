import "./App.css";
import mapImg from "../public/map.png";
import Itenerary from "./components/Itenerary/Itenerary";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { mockData } from "./data/data";
import { useState } from "react";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

function App() {
  const [iteneraryData, setIteneraryData] = useState(mockData);

  // This function calculates the original and new position of the item.
  const getPos = (id) => iteneraryData?.findIndex((data) => data.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log("ACTIVE", active);
    console.log("over", over);
    if (active.id === over.id) return;
    setIteneraryData((iteneraryData) => {
      const originalPosition = getPos(active.id);
      const newPosition = getPos(over.id);
      return arrayMove(iteneraryData, originalPosition, newPosition);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <>
      <main className="main-container">
        <div className="itenerary">
          <DndContext
            sensors={sensors}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCenter}
          >
            <Itenerary mockData={iteneraryData} />
          </DndContext>
        </div>
        <div className="map">
          <img src={mapImg} alt="map" width={"100%"} height={950} />
        </div>
      </main>
    </>
  );
}

export default App;
