import logo from './logo.svg';
//import './App.css';
import ArtistsList from './components/ArtistsList/ArtistsList'


function App() {
  const artists = [
    {
      name: 'Kai Althoff'
    },
    {
      name: 'Cosima von Bonin'
    }
  ]
  return (
    <div className="App">
      <ArtistsList artists={artists}/>
    </div>
  );
}

export default App;
