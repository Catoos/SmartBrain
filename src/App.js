import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particlesbg from './components/particles/Particlesbg';
import './App.css';


class App extends Component {
  render() {
  return (
    <div className="App">
      {/* <ParticlesBg className='particles' num={30} type="cobweb" color="#FFFFFF" bg={true} /> */}

      <Navigation />
       <Logo />
       <Rank />
      <ImageLinkForm />
      <Particlesbg />

       {/* <FaceRecognition /> */}
    </div>
  );
}
}

export default App;
