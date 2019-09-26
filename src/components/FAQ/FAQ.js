import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {faqData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero heroImage={faqData.image} titleText={faqData.title} />
    <p>{faqData.content}</p>
  </Container>
);

export default FAQ;