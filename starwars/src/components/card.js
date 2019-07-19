import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    width: 45%;
    margin: auto;
    margin-top;: 1%;
`;

const Info = styled.div`
    border: 1px solid red;
`;

const Name = styled.h2`
    background-color: black;
    color: white;
    font-size: 2.5rem;
`;


const Card = ({name, birth, eye, height, hair, home, species})=>{

    return(
        
        <CardDiv>
            <Name>Name: {name}</Name>
            <Info>
                <h2>Birth Year: {birth}</h2>
                <h2>Eye: {eye}</h2>
                <h2>Height: {height}</h2>
                <h2>Hair Color: {hair}</h2>
                <h2>Home: {home}</h2>
                <h2>species: {species}</h2>
            </Info>
        </CardDiv>

    )


}

export default Card;