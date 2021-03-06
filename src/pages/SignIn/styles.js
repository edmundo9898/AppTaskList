import styled from 'styled-components/native';


export const Container = styled.View`
background-color: #121212;
flex: 1;
align-items: center;
justify-content: center;

`;

export const TextLogo = styled.Text`
color: white;
font-size: 50px;
margin-bottom: 2px;
color: #009900;
font-weight: bold;
`;

export const AreaInput = styled.TextInput.attrs({
    placeholderTextColor: '#909090'
})`
width: 85%;
height: 50px;
padding: 10px;
border-width: 2px;
border-color: #000;
border-radius: 10px;
margin: 10px;
background-color: #fff;
font-size: 20px;

`;

export const SubmitBtn = styled.TouchableOpacity`
width: 85%;
height: 50px;
margin-top: 10px;
border-width: 1px;
border-color: #000;
border-radius: 10px;
align-items: center;
justify-content: center;
background-color:  #009900;
`; 

export const Textbtn = styled.Text`
color: #fff;
font-size: 19px;

`;


export const  Link = styled.TouchableOpacity`
width: 80%;
height: 50px;
align-items: center;
justify-content: center;
`;

export const TextLink = styled.Text`
color: #fff;
font-size: 16px;

`;