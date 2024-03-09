import logo from './logo.svg';
import './App.css';
import './components/Header'
import Header from './components/Header';
import Footer from './components/Footer';
import Event from './components/Event';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{display: 'flex'}}>
        <div style={{margin: 'auto'}} className="grid grid-cols-1 gap-4 place-content-center">
          <Event />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
