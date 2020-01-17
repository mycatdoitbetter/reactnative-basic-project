import { Animated, StyleSheet} from 'react-native'
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`

  margin: -20px 30px;
`;


export const Nav = styled.View`
margin-top: -20px;
border-top-width: ${StyleSheet.hairlineWidth}px;
border-top-color: rgba(255, 255, 255, 0.8);

`;
export const NavItem = styled.View`
flex-direction: row;
align-items: center;
padding: 12px 10px;
border-bottom-width: 1px;
border-bottom-color: rgba(255, 255, 255, 0.8);
`;
export const NavText = styled.Text`

  font-size: 15px;
  color: #FFF;
  padding: 5px 135px;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 30px;
`;

export const SignOutButtonText = styled.Text`
color: #FFF;

font-weight: bold;
font-size: 15px;
`;



