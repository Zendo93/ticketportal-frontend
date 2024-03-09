import './App.css';
import './components/Header'
import Header from './components/Header';
import Footer from './components/Footer';
import Event from './components/Event';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="m-20 
          grid sm:grid-cols-2 
          min-[950px]:grid-cols-3 
          xl:grid-cols-4 2xl:grid-cols-5 
          gap-4 place-content-center">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
