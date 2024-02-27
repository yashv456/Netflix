import React from 'react';
import background from '../assets/login.jpg';
import { Container } from './backgroundStyle';

export default function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
}
