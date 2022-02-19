import './App.css';

function App() {

  return (
    <div className="App">
      <div>
      <h1>🎥 Films List</h1>
        <p class="total">Total Films 0</p>
        <label>
          <input type="checkbox"/>
          Show Watched Only
        </label>
        <ul></ul>
      </div>
      <div>
        <h2>Add a new film</h2>
        <form>
          <label>
              Film Name
              <input></input>
          </label>
          <label>
              Film Genre
              <select>
                <option>Action</option>
                <option>Horror</option>
                <option>SciFi</option>
                <option>Comedy</option>
              </select>
          </label>
          <label>
            Film Rating
            <input type="number" min="1" max="5" />
          </label>
          <label>
            Film Description
            <textarea />
          </label>
          <label>
            Film Watched
            <input type="checkbox" />
          </label>
          <input type="submit" value="Add"/>
        </form>
      </div>
    </div>
  );
}

export default App;
