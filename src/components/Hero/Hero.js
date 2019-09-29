import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img src={props.imageSource} className={styles.image}  />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node,
  imageSource: PropTypes.string,
};

export default Hero;
