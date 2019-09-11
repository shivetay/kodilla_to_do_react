import React from 'react';
import styles from './Hero.scss';



const Hero = () => (
  <header className={styles.component}>
    <h2 className={styles.title}>Thisg to do</h2>
    <img className={styles.image} src="https://cdn.pixabay.com/photo/2018/03/31/09/55/color-3277733_960_720.jpg" />
  </header>
);

export default Hero;
