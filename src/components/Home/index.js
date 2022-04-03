import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'l', 'y', 's', 's', 'a']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l','o', 'p', 'e', 'r']

  return(
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hello World 🌎 <br /> My name is&nbsp;
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15} />
        <br />
        I am a&nbsp; 
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={22} />
        &nbsp;💻
        <br />
        </h1>
        <br />
        <br />
        <h2>Frontend Developer</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home;