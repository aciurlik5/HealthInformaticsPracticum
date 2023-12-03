
import { API, Auth } from "aws-amplify";
import { listMorningQuestionnaires, listNightQuestionnaires } from "../../graphql/queries";
import React, { useState, useEffect } from 'react';




function Insights() {
    const [aggregateData, setAggregateData] = useState(
        {
            sleepA: 0, 
            stressA:0, 
            sleepMedian:0, 
            stressMedian:0 
        }
    );


    let sleepAmount = [];
    let stressAmount = [];
    let alcholServings = [];
    let sugaryServings = [];
    let waterServings = [];
    let physicalActivityAmount = [];
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

     let data = {};
     morningData = await API.graphql({query: listMorningQuestionnaires, variables:{'_deleted': false}})
     nightData = await API.graphql({query: listNightQuestionnaires, variables:{'_deleted': false}})

     morningDataArray = morningData.data.listMorningQuestionnaires.items;
     console.log(morningDataArray)
     nightDataArray =  nightData.data.listNightQuestionnaires.items;

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

        data.sleepAmount = sleepAmount;
        data.stressAmount = stressAmount;
        data.physicalActivityAmount = physicalActivityAmount;
        data.sugaryDrinksServings = sugaryServings;
        data.waterServings = waterServings;
        data.alcholServings = alcholServings;
        return data
    }
    
    
  


function average(array){
    let sum = 0;
    for(let item of array){
        sum = sum + item
    }
    return sum / array.length;
}


function median(array){
    let sortedArray = array.sort(function (a, b){return a - b});
    if(array.legnth %2 ){
        return sortedArray[array.length/2];
    }
    else{
        return sortedArray[Math.ceil(array.length/2)];
    }

}




    return <div>

        
        <h1>Insights</h1>

   

        <h2>Morning</h2>

        <h3>Sleep</h3>

        <div>
        <table>
        <tr>
            <td>Average</td>
            <td>{aggregateData.sleepA}</td>
        </tr>
        <tr>   
            <td>Median </td>
            <td>{aggregateData.sleepMedian}</td>
        </tr>
        </table>

       
        </div>

  


        <h3>Stress</h3>

        <div>
        <table>
        <tr>
            <td>Average</td>
            <td>{aggregateData.stressA}</td>
        </tr>
        <tr>   
            <td>Median </td>
            <td>{aggregateData.stressMedian}</td>
        </tr>
        </table>
        </div>



  
        

        <h2>Night</h2>



        <h3>Alcohol Servings</h3>

<div>
<table>
<tr>
    <td>Average</td>
    <td>{aggregateData.alcholServingsA}</td>
</tr>
<tr>   
    <td>Median </td>
    <td>{aggregateData.alcholServingsMedian}</td>
</tr>
</table>
</div>


<h3>Sugary Drinks Servings</h3>

<div>
<table>
<tr>
    <td>Average</td>
    <td>{aggregateData.sugarA}</td>
</tr>
<tr>   
    <td>Median </td>
    <td>{aggregateData.sugarMedian}</td>
</tr>
</table>
</div>


<h3>Water Servings</h3>

<div>
<table>
<tr>
    <td>Average</td>
    <td>{aggregateData.waterA}</td>
</tr>
<tr>   
    <td>Median </td>
    <td>{aggregateData.waterMedian}</td>
</tr>

</table>
</div>


<h3>Physical Activity Amount</h3>

<div>
<table>
<tr>
    <td>Average</td>
    <td>{aggregateData.physicalActivityA}</td>
</tr>
<tr>   
    <td>Median </td>
    <td>{aggregateData.physicalActivityMedian}</td>
</tr>
</table>
</div>

     
        
    </div>;
}



export default Insights;


