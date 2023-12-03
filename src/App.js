import React, { useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Morning from '../src/pages/Morning/morning';
import Night from '../src/pages/Night/night';
import DoctorPlanning from "./pages/DoctorPlanning/doctor-planning";
import QuestionaireView from "./pages/QuestionaireView/questionView";


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

      
      <div>
  
      <button className='buttons' onClick={() => {setCount(1);}}>Morning Questionaire</button>
      <button className='buttons' onClick={() => {setCount(2);}}>Night Questionaire</button>
      <button className='buttons' onClick={() => {setCount(3);}}>Insights</button>
      <button className='buttons' onClick={() => {setCount(4);}}> Plan Doctor Appointment</button>
      <button className='buttons' onClick={() => {setCount(5);}}> View Past Responses</button>
       <button className='buttons' onClick={signOut}>Sign Out</button>
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


{count === 5 &&
  <div>
    <QuestionaireView></QuestionaireView>

  </div>
  
  
  
  }

    </View>
  );
};

export default withAuthenticator(App);