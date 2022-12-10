import './App.css';
import InfoCard from './Components/InfoCard';
import emailIcon from './Buttons/Icon.png';
import linkedIcon from './Buttons/linkedinIcon.png';
import twitter from './Buttons/Twitter.png'
import facebook from './Buttons/Facebook.png'
import instagram from './Buttons/Instagram.png'
import github from './Buttons/GitHub.png'
import linked from './Buttons/Linkedin2.png'

function App() {
  return (
    <div className="App">
      <InfoCard
        img={emailIcon}
        button='Email'
        secondimg={linkedIcon}
        buttonlinked='LinkedIn'
        twitter={twitter}
        facebook={facebook}
        instagram={instagram}
        github={github}
      />
      <InfoCard
        img={emailIcon}
        button='Email'
        twitter={twitter}
        facebook={facebook}
        instagram={instagram}
        linked={linked}
        github={github}
      />
      <InfoCard
        img={emailIcon}
        button='Email'
        secondimg={linkedIcon}
        buttonlinked='LinkedIn'
        twitter={twitter}
        facebook={facebook}
        instagram={instagram}
        github={github}
      />
      <InfoCard
        img={emailIcon}
        button='Email'
        twitter={twitter}
        facebook={facebook}
        instagram={instagram}
        linked={linked}
        github={github}
      />
    </div>
  );
}

export default App;
