
import { API, Auth } from "aws-amplify";
import { listMorningQuestionnaires, listNightQuestionnaires } from "../../graphql/queries";
import React, { useState, useEffect } from 'react';
import LineChart from "../../component/line-graph";



function Insights() {
    const [aggregateData, setAggregateData] = useState(
        {
            sleepA: 0, 
            stressA:0, 
            sleepMedian:0, 
            stressMedian:0 
        }
    );

    const [data, setData] = useState({});


    let morningData = 0;
    let nightData = 0;
    let morningDataArray;
    let nightDataArray;
  

   

    


    useEffect(()=>{
        fetchData().then((data)=>{
            let aggregateData = {
            
                sleepA: average(data.sleepAmount),
                stressA:  average(data.stressAmount),

                sleepMedian:   median(data.sleepAmount),
                stressMedian: median(data.stressAmount),

                sugarA: average(data.sugaryDrinksServings),
                sugarMedian: median(data.sugaryDrinksServings),

                physicalActivityA: average(data.physicalActivityAmount),
                physicalActivityMedian: median(data.physicalActivityAmount),

                waterA: average(data.waterServings),
                waterMedian: median(data.waterServings),

                alcholServingsA: average(data.alcholServings),
                alcholServingsMedian: median(data.alcholServings)
            }
            setAggregateData(aggregateData);
    
        });


    }, []);

 

    
    async function fetchData(){

    let userEmail;
    Auth.currentUserInfo().then((userInfo) => {
          const { attributes = {} } = userInfo;
          userEmail= attributes['email'];
    });

    let sleepAmount = [];
    let stressAmount = [];
    let alcholServings = [];
    let sugaryServings = [];
    let waterServings = [];
    let physicalActivityAmount = [];


     morningData = await API.graphql({query: listMorningQuestionnaires, variables:{'_deleted': false}})
     nightData = await API.graphql({query: listNightQuestionnaires, variables:{'_deleted': false}})

     morningDataArray = morningData.data.listMorningQuestionnaires.items.filter((question) => question.userEmail === userEmail);
     nightDataArray =  nightData.data.listNightQuestionnaires.items.filter((question) => question.userEmail === userEmail);

     let nightDataArraySorted = nightDataArray.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
      });

      morningDataArray = morningDataArray.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
      });

      let dateStress = [];
      let dateSleep = [];

     for(let question of morningDataArray){
        if(question.userEmail === userEmail){
            if(question.sleepAmount){
                sleepAmount.push(question.sleepAmount);
                dateSleep.push(question.date);
            }
            if(question.stressLevel){
                stressAmount.push(question.stressLevel)
                dateStress.push(question.date);
            }
        }
     }

     let dateSugarDrinks = [];
     let datePA = [];
     let dateArrayAlc = [];
     let dateArrayWaterServ = [];

    




     for(let question of nightDataArraySorted){
        if(question.userEmail === userEmail){
            if(question.alcoholServings){
                alcholServings.push(question.alcoholServings);
                dateArrayAlc.push(question.date);
             }
            if(question.waterServings){
                waterServings.push(question.waterServings);
                dateArrayWaterServ.push(question.date);
            }
            if(question.sugaryDrinksServings){
               sugaryServings.push(question.sugaryDrinksServings);
               dateSugarDrinks.push(question.date);
            }
            if(question.physicalActivityAmount){
                physicalActivityAmount.push(question.physicalActivityAmount);
                datePA.push(question.date);
            }
        }

     }


        data.dateStress = dateStress;
        data.dateSleep = dateSleep;
        data.dateSugarDrinks = dateSugarDrinks;
        data.datePA = datePA;
        data.dateArrayWaterServ = dateArrayWaterServ;
        data.dateArrayAlc = dateArrayAlc;
        data.sleepAmount = sleepAmount;
        data.stressAmount = stressAmount;
        data.physicalActivityAmount = physicalActivityAmount;
        data.sugaryDrinksServings = sugaryServings;
        data.waterServings = waterServings;
        data.alcholServings = alcholServings;
        setData(data);
        return data
    }
    
    
  


function average(array){
    let sum = 0;
    for(let item of array){
        sum = sum + item
    }
    return (sum / array.length).toFixed(2);
}


function median(array){
    let copyOfArray = array.map((x) => x);
    let sortedArray = copyOfArray.sort(function (a, b){return a - b});
    if(array.legnth %2 ){
        return sortedArray[array.length/2];
    }
    else{
        return (sortedArray[Math.floor(array.length/2)]).toFixed(2);
    }

}




    return <div >

        
        <h1>Insights</h1>

   

        <h2>Morning</h2>

        <h3>Sleep</h3>

        <div className='calm-background' style={{paddingLeft:"35%"}}>

        <table>
    <tr>
        <th>
            Statistics
        </th>
        <th>
            Chart
        </th>
    </tr>
<tr>
    <td>Average: {aggregateData.sleepA} <br></br>
        Median: {aggregateData.sleepMedian}
    </td>
    <td>
    <LineChart label={data.dateSleep} lineTitle={"Sleep"} data={data.sleepAmount}/>  
    </td>
</tr>
</table>

       
        </div>

  


        <h3>Stress</h3>

        <div className='calm-background' style={{paddingLeft:"35%"}}>
        <table>
    <tr>
        <th>
            Statistics
        </th>
        <th>
            Chart
        </th>
    </tr>
<tr>
    <td>Average: {aggregateData.stressA} <br></br>
        Median: {aggregateData.stressMedian}
    </td>
    <td>
        <LineChart label={data.dateStress} lineTitle={"Stress"} data={data.stressAmount}/>  
    </td>
</tr>
</table>
        </div>



  
        

        <h2>Night</h2>



        <h3>Alcohol Servings</h3>

<div className='calm-background' style={{paddingLeft:"35%"}}>

<table>
    <tr>
        <th>
            Statistics
        </th>
        <th>
            Chart
        </th>
    </tr>
<tr>
    <td>Average: {aggregateData.alcholServingsA} <br></br>
        Median: {aggregateData.alcholServingsMedian}
    </td>
    <td>
        <LineChart label={data.dateArrayAlc} data={data.alcholServings} lineTitle={"Alcohol Servings"}/>  
    </td>
</tr>
</table>
</div>


<h3>Sugary Drinks Servings</h3>

<div className='calm-background' style={{paddingLeft:"35%"}}>
<table>
    <tr>
        <th>
            Statistics
        </th>
        <th>
            Chart
        </th>
    </tr>
<tr>
    <td>Average: {aggregateData.sugarA} <br></br>
        Median: {aggregateData.sugarMedian}
    </td>
    <td>
        <LineChart label={data.dateSugarDrinks} data={data.sugaryDrinksServings} lineTitle={"Sugary Drink Servings"}/>  
    </td>
</tr>
</table>
</div>


<h3>Water Servings</h3>

<div className='calm-background' style={{paddingLeft:"35%"}}>
<table>
    <tr>
        <th>
            Statistics
        </th>
        <th>
            Chart
        </th>
    </tr>
<tr>
    <td>Average: {aggregateData.waterA} <br></br>
        Median: {aggregateData.waterMedian}
    </td>
    <td>
        <LineChart label={data.dateArrayWaterServ} data={data.waterServings} lineTitle={'Water Servings'}/>  
    </td>
</tr>
</table>
</div>


<h3>Physical Activity Amount</h3>

<div className='calm-background' style={{paddingLeft:"35%"}}>
<table>
    <tr>
        <th>
            Statistics
        </th>
        <th>
            Chart
        </th>
    </tr>
<tr>
    <td>Average: {aggregateData.physicalActivityA} <br></br>
        Median: {aggregateData.physicalActivityMedian}
    </td>
    <td>
        <LineChart lineTitle={"Physical Activity Amount"} label={data.datePA} data={data.physicalActivityAmount}/>  
    </td>
</tr>
</table>
</div>







     
        
    </div>;
}



export default Insights;


