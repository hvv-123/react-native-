import React from 'react';
import styled from 'styled-components/native';
import {TextInput, Button } from "react-native";
const Login = props => (
    <Container>
        <Cover>

            <Heading>Login Here</Heading>
            <TextInput placeholder="Mobilenumber" style={{
                borderBottomColor: '#00000059',
                borderBottomWidth: 1, padding: 10, lineHeight: 30
            }}>

            </TextInput>
            <TextInput placeholder="password" style={{
                borderBottomColor: '#00000059',
                borderBottomWidth: 1, padding: 10, lineHeight: 30
            }}>

            </TextInput >
            <Box>
                <TouchableOpacity>
                    <Text>Login</Text>
                </TouchableOpacity>
            </Box>

        </Cover>
    </Container>
);


export default Login;

const Text = styled.Text`
color:#fff;
font-size:16px;
`
const Heading = styled.Text`
text-align:center;
font-size:22px;
text-transform:uppercase;
`
const Container = styled.View`
background-color: #ffffff;
height:192px;
width: 84%;
border-radius: 14px;
box-shadow: -2px 12px 12px  #80808091;
position:relative;
left:50%;
top:-80px;
margin-left:-42%;
padding:10px;
`
const Image = styled.Image`
position: absolute;
top: 0;
left: 0;
width:100%;
height:100%;
`

const Title = styled.Text`
color: white;
font-size: 24px;
font-weight: bold;
width:170px;
margin-top: 20px;
margin-left: 20px;
`
const Cover = styled.View`
margin-top:20px;
`
const Box = styled.View`
 position:absolute;
 top:100%;
 width:100%;
`
const TouchableOpacity = styled.View`
 padding: 15px;
 background: red;
 width:100%;
 border-radius: 45px;
 position:absolute;
 left:50%;
 top:15px;
 margin-left:-50%;
 text-align: center;
 cursor:pointer;
 background-image:linear-gradient(to bottom, #7183e6 40%, #5b39bc 80%);
`;
const Content = styled.View
    `



`;
const Span= styled.Text`
 color:#4c34dac9;
 position:absolute;
 top:10px;
 left:10px ;
 font-size:1.0em;
 
`