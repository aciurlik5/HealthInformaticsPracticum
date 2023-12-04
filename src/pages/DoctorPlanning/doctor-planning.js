import 'survey-core/defaultV2.min.css';
import "../../App.css";
import doctorPlanning from './doctor-planning.json'

import {Model } from 'survey-core';
import { BorderlessLight } from "survey-core/themes/borderless-light";
import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { listMorningQuestionnaires, listNightQuestionnaires, listFhirIds } from "../../graphql/queries";

import {
    createDoctorPlan as createDoctorPlanMutation,
    createFhirId as createFhirIdMutation
    
  
  } from "../../graphql/mutations";

// ...
function DoctorPlanning() {

    let userEmail;

    Auth.currentUserInfo().then((userInfo) => {
        const { attributes = {} } = userInfo;
        userEmail= attributes['email'];
    });
    const [data, setData] = useState({});

    const [sendPhysicalActivity, setPA] = useState(false);
    const [sendAlcohol, setAlchol] = useState(false);
    const [sendSleep, setSleep] = useState(false);
    const [concern, setConcern] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [hasID, setHasID] = useState(false);
    const [fhirid, setfhirid] = useState("");
   



    useEffect(()=>{
        fetchData().then((data)=>{
            setData(data);
        })
    }, []);

    async function fetchData(){

       
        let sleepAmount = [];
        let stressAmount = [];
        let alcholServings = [];
        let sugaryServings = [];
        let waterServings = [];
        let physicalActivityAmount = [];
      

       
    
      
    
         let data = {};
        let morningData = await API.graphql({query: listMorningQuestionnaires, variables:{'_deleted': false}})
        let nightData = await API.graphql({query: listNightQuestionnaires, variables:{'_deleted': false}})
        let fhirData = await API.graphql({query: listFhirIds, variables:{'_deleted': false}})


    
        let morningDataArray = morningData.data.listMorningQuestionnaires.items;
        let nightDataArray =  nightData.data.listNightQuestionnaires.items;
        let fhirDataArray = fhirData.data.listFhirIds.items;

        for(let id of fhirDataArray){
            if(id.email === userEmail){
                setHasID(true);
                setfhirid(id.FhirId);


            }
        }
        
    
         for(let question of morningDataArray){
            if(question.userEmail === userEmail){
                if(question.sleepAmount){
                    sleepAmount.push(question.sleepAmount);
                }
                if(question.stressLevel){
                    stressAmount.push(question.stressLevel)
                }
            }
         }
         for(let question of nightDataArray){
            if(question.userEmail === userEmail){
                if(question.alcoholServings){
                    alcholServings.push(question.alcoholServings);
                 }
                if(question.waterServings){
                    waterServings.push(question.waterServings);
                }
                if(question.sugaryDrinksServings){
                   sugaryServings.push(question.sugaryDrinksServings);
                }
                if(question.physicalActivityAmount){
                    physicalActivityAmount.push(question.physicalActivityAmount);
                }
            }
    
         }

         return {
            sleepAmount: average(alcholServings).toFixed(2),
            water: average(waterServings).toFixed(2),
            alcohol: average(alcholServings).toFixed(2),
            physicalActivity: average(physicalActivityAmount).toFixed(2)
         }
    
        }
    
    
   async function submitForm(){


    let data = {
        date: new Date().toISOString().substring(0,10),
        sendSleep: sendSleep,
        sendPA: sendPhysicalActivity,
        sendAlcohol: sendAlcohol,
        concern: concern,
        userEmail: userEmail
    
    
      };
      await API.graphql({
      query: createDoctorPlanMutation,
      variables: { input: data },
    });



    let hapiId;
    if(!hasID){
    fetch("http://hapi.fhir.org/baseR4/Patient?_format=json&_pretty=true", {
            method: "POST",
            body: JSON.stringify({
                "resourceType" : "Patient",
                "active" : true,
                "name" : [{
                  "use" : "official",
                  "family" : lastName,
                  "given" : [firstName]
                }]
               
              }),
        headers: {
            "Content-type": "application/json"
        }}).then((response) => response.json()).then((json) =>  {
            let dataID = {
                email: userEmail,
                FhirId: json.id


            }
        
                API.graphql({
                    query: createFhirIdMutation,
                    variables: { input: dataID },
                  });

            
    
    
        });
    }

    //PA
    let pa = 
    {
        "resourceType": "Observation",
        "status": "final",
        "code": {
          "coding": [ {
            "system": "http://loinc.org",
            "code": "101691-4",
            "display": "Duration of physical activity"
          } ]
        },
        "subject": {
          "reference": ""
        },
        "valueQuantity": {
          "value": "",
          "unit": "minute",
          "system": "http://unitsofmeasure.org",
          "code": "/min"
        }
   }
   pa.subject.reference = "Patient/"+fhirid;
   pa.valueQuantity.value = data.physicalActivity;



   if(sendPhysicalActivity){
    fetch("http://hapi.fhir.org/baseR4/Observation?_format=json&_pretty=true", {
        method: "POST",
        body: JSON.stringify(pa),
    headers: {
        "Content-type": "application/json"
    }})
   }


       //alchol
    let alData = 
       {
           "resourceType": "Observation",
           "status": "final",
           "code": {
             "coding": [ {
               "system": "http://loinc.org",
               "code": "74013-4",
               "display": "Alcohol drinks per day"
             } ]
           },
           "subject": {
             "reference": ""
           },
        "valueQuantity": {
         "value": 4.0,
        "unit": "drinks/day",
        "system": "http://unitsofmeasure.org",
         "code": "/day"
    }
      }
      alData.subject.reference = "Patient/"+fhirid;
      alData.valueQuantity.value = data.alcohol;

   if(sendAlcohol){
    fetch("http://hapi.fhir.org/baseR4/Observation?_format=json&_pretty=true", {
        method: "POST",
        body: JSON.stringify(alData),
    headers: {
        "Content-type": "application/json"
    }})

   }

//sleep
let sleep = 
{
    "resourceType": "Observation",
    "status": "final",
    "code": {
      "coding": [ {
        "system": "http://loinc.org",
        "code": "93832-4",
        "display": "Sleep Duration"
      } ]
    },
    "subject": {
      "reference": ""
    },
    "valueQuantity": {
      "value": 4.0,
      "unit": "hour",
      "system": "http://unitsofmeasure.org",
      "code": "/hour"
    }
}

sleep.subject.reference = "Patient/"+fhirid;
sleep.valueQuantity.value = data.sleepAmount;


   if(sendSleep){
    fetch("http://hapi.fhir.org/baseR4/Observation?_format=json&_pretty=true", {
        method: "POST",
        body: JSON.stringify(sleep),
    headers: {
        "Content-type": "application/json"
    }})


   }

    

   }

   function handlePACheckboxChange(){
        setPA(!sendPhysicalActivity);
   }

   function handlAlcoholCheckboxChange(){
        setAlchol(!sendAlcohol);
   }

   function handleSleepCheckboxChange(){
        setSleep(!sendSleep);
   }



   function handleConcernChange(event){
        setConcern(event.target.value)
   }

   function handleFirstNameChange(event){
        setFirstName(event.target.value)

   }

   function handleLastNameChange(event){
        setLastName(event.target.value)
   }
    
    function average(array){
            let sum = 0;
            for(let item of array){
                sum = sum + item
            }
            return sum / array.length;
    }

    return   <div style={{padding: "40px"}} >

            <div style={{backgroundColor: "white"}}>    
                
            <h2>Let's plan for a productive visit with your physician</h2>
            
            
            </div>
            
            
            
            <div className='calm-background'  style={{paddingBottom: "50px"}}>


                First Name: <br></br>
                <input type="text-area" id="firstName" onChange={handleFirstNameChange}></input><br></br>

                Last Name: <br></br>
                <input type="text-area" id="lastName" onChange={handleLastNameChange}></input><br></br>

                 What are your main concerns? <br></br>
                <input type="text-area" id="problem" onChange={handleConcernChange}></input><br></br>

                <input type="checkbox" id="sleep" checked={sendSleep} onChange={handleSleepCheckboxChange}></input>
                <label for="sleep"> You get an average of {data.sleepAmount} hours of sleep per day.</label><br></br>
               
                <input type="checkbox" id="physicalActivity" checked={sendPhysicalActivity} onChange={handlePACheckboxChange}></input>
                <label for="physicalActivity"> You get an average of {data.physicalActivity} minutes of physical activity per day.</label><br></br>

                <input type="checkbox" id="alcohol"  checked={sendAlcohol} onChange={handlAlcoholCheckboxChange}></input>
                <label for="alcohol"> You drink an average {data.alcohol} servings of alcohol per day.</label><br></br>

                <button className="buttons" onClick={submitForm}>Submit</button>

            </div>

            

    
    </div>;

   

}

export default DoctorPlanning;




// {
//     "resourceType": "Observation",
//     "status": "final",
//     "code": {
//       "coding": [ {
//         "system": "http://loinc.org",
//         "code": "74013-4",
//         "display": "Alcohol drinks per day"
//       } ]
//     },
//     "subject": {
//       "reference": "Patient/7304958"
//     },
//     "valueQuantity": {
//       "value": 4.0,
//       "unit": "drinks/day",
//       "system": "http://unitsofmeasure.org",
//       "code": "/day"
//     }
// }



// {
//     "resourceType": "Observation",
//     "status": "final",
//     "code": {
//       "coding": [ {
//         "system": "http://loinc.org",
//         "code": "93832-4",
//         "display": "Sleep duration"
//       } ]
//     },
//     "subject": {
//       "reference": "Patient/7304958"
//     },
//     "valueQuantity": {
//       "value": 4.0,
//       "unit": "hour",
//       "system": "http://unitsofmeasure.org",
//       "code": "/hour"
//     }
// }



// {
//     "resourceType": "Observation",
//     "status": "final",
//     "code": {
//       "coding": [ {
//         "system": "http://loinc.org",
//         "code": "101691-4",
//         "display": "Duration of physical activity"
//       } ]
//     },
//     "subject": {
//       "reference": "Patient/7304958"
//     },
//     "valueQuantity": {
//       "value": 4.0,
//       "unit": "minute",
//       "system": "http://unitsofmeasure.org",
//       "code": "/min"
//     }
// }