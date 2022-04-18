import './App.scss';

function App() {
  return (
    <div className="trello-container">
      <nav className="navbar app">App bar</nav>
      <nav className="navbar board">Board bar</nav>
      <div className="board-column">
        <div className="column">
        <header className="trello-header">
              Brainstorm
        </header>
          <ul>
            <li>
            <img src="https://picsum.photos/200/200" alt='trung-img'/>
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
          </ul>
          <footer>Add another card</footer>
          </div>
          <div className="column">
        <header className="trello-header">
              Brainstorm
        </header>
          <ul>
            <li>
            <img src="https://picsum.photos/200/200" alt='trung-img'/>
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
            <li>
            Green vines attached to the trunk of the tree
            </li>
          </ul>
          <footer>Add another card</footer>
          </div>
      </div>
    </div>
  );
}

export default App;
