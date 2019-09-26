import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import MainLayout from '../MainLayout/MainLayout';
import styles from './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import {spring, AnimatedSwitch} from 'react-router-transition';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0, scale: (1.2) }}
        atLeave={{ opacity: bounce(0), scale: bounce(0.8) }}
        atActive={{ opacity: bounce(1), scale: bounce(1) }}
        mapStyles={mapStyles}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/faq" component={FAQ} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

export default App;