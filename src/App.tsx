import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/layout/Header";
import { GenerateScript } from "./data/GenerateScript";

function App() {
  const { Editor1, Editor2, Editor3, Editor4, Editor5 } = GenerateScript();
  const [selectedEditorValue, setSelectedEditorValue] = useState([]);

  return (
    <>
      <Header
        editor1={Editor1}
        editor2={Editor2}
        editor3={Editor3}
        editor4={Editor4}
        editor5={Editor5}
        setSelectedEditorValue={setSelectedEditorValue}
      />
      <Content selectedEditorValue={selectedEditorValue} />
    </>
  );
}

export default App;
