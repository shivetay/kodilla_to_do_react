import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqSettings} from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <Hero titleText={faqSettings.title} imageSource ={faqSettings.image} />
    <p>{faqSettings.content}</p>
  </Container>
);

export default FAQ;
