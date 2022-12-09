import './App.css';
import InfoCard from './Components/InfoCard';
import emailIcon from './Buttons/Icon.png';
import linkedIcon from './Buttons/linkedinIcon.png';

function App() {
  return (
    <div className="App">
      <InfoCard
        img={emailIcon}
        button='Email'
        secondimg={linkedIcon}
        buttonlinked='LinkedIn'
      />
      <InfoCard
        img={emailIcon}
        button='Email'
      />
      <InfoCard
        img={emailIcon}
        button='Email'
        secondimg={linkedIcon}
        buttonlinked='LinkedIn' />
      <InfoCard
        img={emailIcon}
        button='Email'
      />
    </div>
  );
}

export default App;
