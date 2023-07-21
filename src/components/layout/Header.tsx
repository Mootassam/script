import "../styles/style.css";
function Header() {
  return (
    <div className="app__header">
      <div className="header">
        <button onClick={()=> alert("add the list of items in the list of ")}> Editor [ 1 ]</button>
        <button onClick={()=> alert("add the list of items in the list of ")}> Editor [ 2 ]</button>
        <button  onClick={()=> alert("add the list of items in the list of ")}> Editor [ 3 ]</button>
        <button onClick={()=> alert("add the list of items in the list of ")} > Editor [ 4 ]</button>
        <button onClick={()=> alert("add the list of items in the list of ")}> Editor [ 5 ]</button>
      </div>
    </div>
  );
}

export default Header;
