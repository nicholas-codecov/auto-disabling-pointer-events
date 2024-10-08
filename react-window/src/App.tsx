import { FixedSizeList as List } from "react-window";
import LargeData from "./LargeData.json";

import "./App.css";

const Row = ({
  index,
  style,
}: {
  index: number;
  style: React.CSSProperties;
}) => (
  <div style={style} className="row-styles">
    Row {index}
  </div>
);

function App() {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>React Window Example</h1>
      <div>
        <List
          height={400}
          itemCount={LargeData.length}
          itemSize={35}
          width={500}
          itemData={LargeData}
          overscanCount={50}
        >
          {Row}
        </List>
      </div>
    </div>
  );
}

export default App;
