import React from 'react';
import styled from 'styled-components/native';
import { TextInput, Button } from "react-native";
const Register = props => (
    <Container>
        <Heading>Register Here</Heading>
        <TextInput placeholder="MObile number" style={{
            borderBottomColor:
                '#000', borderWidth: 1, padding: 10, borderColor: '#fff', lineHeight: 30
        }}>
        </TextInput>
        <TextInput placeholder="Password" style={{
            borderBottomColor:
                '#000', borderWidth: 1, padding: 10, borderColor: '#fff', lineHeight: 30
        }}>
        </TextInput>
        <TextInput placeholder="Confirm Password" style={{
            borderBottomColor:
                '#000', borderWidth: 1, padding: 10, borderColor: '#fff', lineHeight: 30
        }}>
        </TextInput>
        <TouchableOpacity>
            <Text>Create account</Text>
        </TouchableOpacity>
    </Container>
);

export default Register;
const Heading = styled.Text`
text-align:center;
font-size:22px;
text-transform:uppercase;
`
const Container = styled.View`
background-color: #ffffff;
width: 84%;
height:250px;
border-radius: 14px;
box-shadow: -2px 12px 12px  #80808091;
position:relative;
left:50%;
top:-80px;
margin-left:-42%;
padding:20px;
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
`;
const Cover = ``;
const TouchableOpacity = styled.View`
 padding: 15px;
 background: red;
 width:90%;
 border-radius: 45px;
 position:absolute;
 left:50%;
 bottom:-30px;
 margin-left:-45%;
 text-align: center;
 cursor:pointer;
 background-image:linear-gradient(to bottom, #7183e6 40%, #5b39bc 80%);
`;
const Text = styled.Text`
color:#fff;
font-size:16px;
`
