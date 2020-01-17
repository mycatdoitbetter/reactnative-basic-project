import React from 'react';
import { Alert, BackHandler } from 'react-native';

import { Container,  Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({ translateY }){

  return(

    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 1]
      }),
    }}>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText >Ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="account-balance" size={20} color="#fff" />
          <NavText>Contas</NavText>
        </NavItem>
        <NavItem>
          <Icon name="grade" size={20} color="#fff" />
          <NavText>Favoritos</NavText>
        </NavItem>
        <NavItem>
          <Icon name="shopping-cart" size={20} color="#fff" />
          <NavText>Compras</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {Alert.alert(//title
      'Confirmação',
      'Deseja sair?',
      [
        {text: 'Sim', onPress: () => BackHandler.exitApp()},
        {text: 'Não'},
      ],
      { cancelable: false });}}>
        <SignOutButtonText>Sair do aplicativo</SignOutButtonText>
      </SignOutButton>
    </Container>

  );

}
