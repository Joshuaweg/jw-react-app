import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header style={{ textAlign: 'center', margin: '20px' }}>
        <h1>Welcome to Analystrix</h1>
        <p>Demystifying AI for All</p>
      </header>
      <main style={{ textAlign: 'center', margin: '20px' }}>
        <p>Welcome to Analystrix. Our mission is to design and implement tools for your deep learning models so they can be transparent and trusted.</p>
      </main>
    </div>
  );
}

export default App;
