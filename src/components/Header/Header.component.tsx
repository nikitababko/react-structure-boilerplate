import React from 'react';

import LogoSVG from '../../assets/Header/Logo.svg';
import { Image } from '../UI/Image';

import { Container } from './Header.styles';

export const Header: React.FC = () => {
  const color = 'red';
  const arr = [1, 2];
  const newArr = [...arr];

  if (color === 'red') {
    const a = 4;
    console.log('ASD');
  }

  return (
    <Container>
      <Image
        dataLabel="Header-logo"
        src={LogoSVG}
        alt="Logo"
        width={80}
        height={80}
      />
      Learn React
    </Container>
  );
};
