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
    axios.get('https://henry-mock-swapi.herokuapp.com/api')
      .then(file =>{
        console.log(file.data.results);
        setWarsObj(file.data.results);
      })
      .catch(error=>{
        console.log(error);
      })

  },[])

  const [home, setHome] = useState([]);
  useEffect(()=>{
    axios.get('https://swapi.co/api/planets/')
      .then(file =>{
        setHome(file.data.results);
      })
      .catch(error=>{
        console.log(error);
      })

  },[])

  console.log("warsObj", home);

  const AlignCard = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;

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
              hair={element.hair_color}
              
              />)
        }
      </AlignCard>
    </div>
  );

}

export default App;
