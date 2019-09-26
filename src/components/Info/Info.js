import React from 'react';
// import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {infoData} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero heroImage={infoData.image} titleText={infoData.title} />
    <p>{infoData.content}</p>
  </Container>
);

// Info.propTypes = {
//   image: PropTypes.string,
// };

export default Info;