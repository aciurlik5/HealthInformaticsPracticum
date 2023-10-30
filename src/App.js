import React, { useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Morning from '../src/pages/Morning/morning';
import Night from '../src/pages/Night/night';
import DoctorPlanning from "./pages/DoctorPlanning/doctor-planning";

import {useState} from 'react';


import {

  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";

import {

} from "./graphql/mutations";
import Insights from "./pages/Insights/insights";


const App = ({ signOut }) => {


  useEffect(() => {
  }, []);



const [count, setCount] = useState(1);



  return (

    
    <View className="App">

      
      <div><button  onClick={signOut}>Sign Out</button></div>
      <div>
      <button onClick={() => {setCount(1);}}>Morning Questionaire</button>
      <button onClick={() => {setCount(2);}}>Night Questionaire</button>
      <button onClick={() => {setCount(3);}}>Insights</button>
      <button onClick={() => {setCount(4);}}> Plan Doctor Appointment</button>
      </div>


      
      { count === 1 && 
      <div>
        <Morning></Morning>
        </div>
      }
        { count === 2 && 
      <div>
        <Night></Night>
        </div>
      }

  {count === 3 &&
  <div>
    <Insights></Insights>

  </div>
  
  
  
  }

{ count === 4 && 
      <div>
        <DoctorPlanning></DoctorPlanning>
        </div>
      }

    </View>
  );
};

export default withAuthenticator(App);