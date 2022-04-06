import React from 'react';
import styled from '@emotion/styled';

// Creando Styled Components
const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px';
    text-align: center;
`;


const Header = ({ titulo }) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{ titulo }</TextoHeader>
        </ContenedorHeader>
    );
}
 
export default Header;