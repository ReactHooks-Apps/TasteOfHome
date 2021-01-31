
import './App.css';
import DenseAppBar from './components/header.js';
import BottomAppBar from './components/footer.js';
import AutoGrid from './components/Items.js'

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <BottomAppBar />
      <AutoGrid />
    </div>
  );
}

export default App;
