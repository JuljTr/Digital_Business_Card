import './App.css';
import InfoCard from './Components/InfoCard';

function App() {
  return (
    <div className="App">
    <InfoCard 
    button='email'
    buttonlinked='linkedin'
    />
    <InfoCard 
    button='email'
    />
    <InfoCard 
    button='email'
    buttonlinked='linkedin'/>
    <InfoCard 
    button='email'
    />
    </div>
  );
}

export default App;
