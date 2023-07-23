import "../styles/style.css";

function Header(props) {
  const {
    editor1,
    editor2,
    editor3,
    editor4,
    editor5,
    setSelectedEditorValue,
  } = props;

  const editorFn = async (editorFn) => {
    const scripts = await editorFn();
    setSelectedEditorValue(scripts);
  };

  return (
    <div className="app__header">
      <div className="header">
        <button onClick={() => editorFn(editor1)}> Editor [ 1 ]</button>
        <button onClick={() => editorFn(editor2)}> Editor [ 2 ]</button>
        <button onClick={() => editorFn(editor3)}> Editor [ 3 ]</button>
        <button onClick={() => editorFn(editor4)}> Editor [ 4 ]</button>
        <button onClick={() => editorFn(editor5)}> Editor [ 5 ]</button>
      </div>
    </div>
  );
}

export default Header;
