import { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [addItems, setAddItems] = useState("");
  return (
    <div className="container mt-5">
      <form action="">
        <input onChange={e => setAddItems(e.target.value)} value={addItems} className=" form-control" type="text" placeholder="Your Name" />
        <p>{addItems}</p>
      </form>
      <ul></ul>
    </div>
  );
};

export default App;
