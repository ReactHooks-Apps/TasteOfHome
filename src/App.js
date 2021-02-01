
import './App.css';
import DenseAppBar from './components/header.js';
import BottomAppBar from './components/footer.js';
// import AutoGrid from './components/Items.js'
import Photos from './components/Items'

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <BottomAppBar />
      <Photos />
      {/* <AutoGrid /> */}
    </div>
  );
}

export default App;
