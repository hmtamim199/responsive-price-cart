// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-5xl font-bold underline'>this is big big header</h1>
      <p className='text-lg'>this is simple paragraph</p>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
