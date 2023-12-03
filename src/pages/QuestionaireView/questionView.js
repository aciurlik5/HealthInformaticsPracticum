import React, { useState, useEffect } from 'react';
import { API, Auth } from "aws-amplify";
import { listMorningQuestionnaires, listNightQuestionnaires, listDoctorPlans } from "../../graphql/queries";




function QuestionaireView() {
    let morningDataArray;
    let nightDataArray;
    let doctorDataArray;

    const [selectedSurvey, setSelectedSurvey] = useState({
        type: "",
        data: {}


    });

    const [loading, setLoading] = useState(false);
    const [morningResponses, setMorning] = useState();
    const [nightResponse, setNight] = useState();
    const [doctorResponse, setDoctor] = useState();


    useEffect(()=>{
        fetchData().then((data)=>{
    
    
        });


    }, []);

        
    async function fetchData(){

        let userEmail;
        Auth.currentUserInfo().then((userInfo) => {
              const { attributes = {} } = userInfo;
              userEmail= attributes['email'];
        });
        let morningData = await API.graphql({query: listMorningQuestionnaires, variables:{'_deleted': false}})
        let nightData = await API.graphql({query: listNightQuestionnaires, variables:{'_deleted': false}})
        let doctorData = await API.graphql({query: listDoctorPlans, variables:{'_deleted': false}})
        morningDataArray = morningData.data.listMorningQuestionnaires.items.filter((question => question.userEmail === userEmail));
        for(let question of morningDataArray){
            let  sleepIssues = [];
            if(question.sleepIssueBedLeave){
                sleepIssues.push('Issue leaving bed');
            }
            if(question.sleepIssueFallingAsleep){
                sleepIssues.push("Issue falling asleep");
            }
            if(question.sleepIssueRested){
                sleepIssues.push("Issue feeling rested in the morning")
            }
            if(question.sleepIssueStayingAsleep){
                sleepIssues.push("Issue staying asleep")
            }

            question.sleepIssues = sleepIssues.join(', ');
  
        

        }

        nightDataArray =  nightData.data.listNightQuestionnaires.items.filter((question => question.userEmail === userEmail));
        console.log('DAD', doctorData.data.listDoctorPlans.items)
        doctorDataArray =  doctorData.data.listDoctorPlans.items.filter((question => question.userEmail === userEmail));
        console.log('DA')
        console.log(doctorDataArray);
        setNight(nightDataArray)
        setMorning(morningDataArray)
        setDoctor(doctorDataArray)
        setLoading(true);
        }

       function showElement(item, type) {
            console.log(item);
            setSelectedSurvey({
                type: type,
                data: item

            })
        }


    return <div>
            
        <table>
            <tr>
                <th>Morning</th>
                <th>Night</th>
                <th>Doctor Plans</th>
            </tr>
            <tr>
                <td>
              
                    {loading && morningResponses && morningResponses.map((item, index) => (
                        <p onClick={() => {showElement(item, 'Morning');}} key={index}>{item.date}</p> 
                    ))}
                
                </td>
                <td>
                    {loading && nightResponse && nightResponse.map((item, index) => (
                        <p onClick={() => {showElement(item, 'Night');}} key={index}>{item.date}</p> 
                    ))}
                </td>
                <td>
                    {loading && doctorResponse && doctorResponse.map((item, index) => (
                        <p onClick={() => {showElement(item, 'Doctor');}} key={index}>{item.date}</p> 
                    ))}

                </td>
            </tr>

        </table>






            
        
        {selectedSurvey.type === 'Morning' &&
            
                <div>
                <h2>Morning Answers</h2>
                    Date: {selectedSurvey.data.date}<br></br> 
                    Sleep Amount: {selectedSurvey.data.sleepAmount} <br></br>
                    Sleep Issues: {selectedSurvey.data.sleepIssues}<br></br>
                    Stress Amount: {selectedSurvey.data.stressLevel} <br></br>
                    Goals: {selectedSurvey.data.goal}<br></br>
                </div>

            }

           
        {selectedSurvey.type === 'Night' &&
            <div>
                <h2>Night Answers</h2>
                    Date: {selectedSurvey.data.date}<br></br> 
                    Alcohol Servings: {selectedSurvey.data.alcoholServings} <br></br>
                    Sugary Drinks Servings: {selectedSurvey.data.sugaryDrinksServings}<br></br>
                    Water Servings: {selectedSurvey.data.waterServings}<br></br>
                    Pain Description: {selectedSurvey.data.painDescription}<br></br>
                    Stress Amount: {selectedSurvey.data.stressLevel}<br></br>
                    Physical Activity Amount: {selectedSurvey.data.physicalActivityAmount}<br></br>
                    Reflections: {selectedSurvey.data.reflection}<br></br>

                </div>
        }

        {selectedSurvey.type === 'Doctor' &&
            <div>
                <h2>Doctor Planning</h2>
                    Date: {selectedSurvey.data.date}<br></br> 
                    Concerns: {selectedSurvey.data.concern}<br></br>

                </div>
        }
        </div>
}

export default QuestionaireView;