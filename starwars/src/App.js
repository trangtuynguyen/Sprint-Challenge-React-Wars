import React from 'react';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import Card from "./components/card";
import styled from 'styled-components';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [warsObj, setWarsObj] = useState([]);
  useEffect(()=>{
    axios.get('https://swapi.co/api/people/')
      .then(file =>{
        console.log(file.data.results);
        setWarsObj(file.data.results);
      })
      .catch(error=>{
        console.log(error);
      })

  },[])

  console.log("warsObj", warsObj);

  const AlignCard = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    border: 4px solid blue;

`;
 



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <AlignCard>
        {  warsObj.map((element,index) => <Card 
              key={index}
              name={element.name} 
              birth={element.birth_year}
              eye={element.eye_color}
              height={element.height}
              hair={element.hair}
              home={element.home}
              species={element.species}
              
              />)
        }
      </AlignCard>
    </div>
  );

}

export default App;
