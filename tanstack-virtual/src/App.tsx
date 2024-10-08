import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import LargeData from "./LargeData.json";

import "./App.css";

function App() {
  const parentRef = useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: LargeData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>TanStack Virtual Example</h1>
      <div
        ref={parentRef}
        className="List"
        style={{
          height: `400px`,
          width: `500px`,
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.index}
              className="row-styles"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              Row {virtualRow.index}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
