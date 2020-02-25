import React from "react";
import { Text, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Icon from "react-native-vector-icons/FontAwesome";
export default class App extends React.Component {
  render() {
    return (
  
      <Container>
        <TitleBar>
          <IconBox>
           <Icon name="home" size={50} color="#5a39bc" style={{position:"absolute",left:"24%",top:"20%"}} /> 
          </IconBox>
        </TitleBar>
        <Login/>
     
        </Container>

      
    );
  }
}
const Container = styled.View`
  
  flex: 1;
  background:#ffffff;
  
`;
const TitleBar = styled.View`
  width: 100%;
  height:50%;
  background-image:linear-gradient(to bottom, #7183e6 40%, #5b39bc 80%);
 `;
const IconBox=styled.View`
 height:100px;
 width:100px;
 background-color:#fff;
 position:absolute;
 left:50%;
 margin-left:-50px;
 top:80px;
 border-radius:50px;

`



