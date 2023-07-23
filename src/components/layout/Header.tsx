import "../styles/style.css";
import { useState } from "react";
function Header(props) {
  const [active, setActive] = useState();
  const {
    editor1,
    editor2,
    editor3,
    editor4,
    editor5,
    setSelectedEditorValue,
  } = props;

  const editorFn = async (editorFn, index) => {
    const scripts = await editorFn();
    setSelectedEditorValue(scripts);
    setActive(index);
  };

  const data = [editor1, editor2, editor3, editor4, editor5];

  return (
    <div className="app__header">
      <div className="header">
        {data.map((item, index) => (
          <button
            className={`${active === index ? "__active" : ""}`}
            onClick={() => editorFn(item, index)}
          >
            Editor [ {index + 1} ]
          </button>
        ))}
      </div>
    </div>
  );
}

export default Header;
