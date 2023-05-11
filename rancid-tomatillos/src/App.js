import './App.css';
import movieData from './mockData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rancid Tomatillos</h1>
      </header>
    </div>
  );
}

export default App;
