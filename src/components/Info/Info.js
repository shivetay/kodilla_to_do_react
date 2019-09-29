import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoSettings} from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <Hero titleText={infoSettings.title} imageSource ={infoSettings.image} />
    <p>{infoSettings.content}</p>
  </Container>
);

export default Info;
