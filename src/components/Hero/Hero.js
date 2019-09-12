import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './Hero.scss';



const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.heroImage} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  heroImage: PropTypes.string,
};

export default Hero;
