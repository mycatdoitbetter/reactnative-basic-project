import React from 'react';
import { Container, Top, Logo, Title, Arrow } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import logo from '~/assets/80logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title style={{color: '#fff', fontFamily: 'CocomatLight-ZXY3'}}>01 - Fab. Fortaleza</Title>
      </Top>
      <Arrow>
        <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
      </Arrow>
    </Container>
  );
}

