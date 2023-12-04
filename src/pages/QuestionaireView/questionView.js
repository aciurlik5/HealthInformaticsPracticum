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
        doctorDataArray =  doctorData.data.listDoctorPlans.items.filter((question => question.userEmail === userEmail));
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


    return <div style={{paddingTop: "15px"}}>


<div className='calm-background' style={{paddingBottom:"30px", paddingTop:"3px"}}>



{selectedSurvey.type === 'Morning' &&
            
            <div>
            <h2>Morning Answers</h2>
                <b>Date: </b> {selectedSurvey.data.date}<br></br> 
                <b>Sleep Amount: </b> {selectedSurvey.data.sleepAmount} <br></br>
                <b>Sleep Issues: </b> {selectedSurvey.data.sleepIssues}<br></br>
                <b>Stress Amount: </b> {selectedSurvey.data.stressLevel} <br></br>
                <b>Goals: </b> {selectedSurvey.data.goal}<br></br>
            </div>

        }

       
    {selectedSurvey.type === 'Night' &&
        <div>
            <h2>Night Answers</h2>
                <b>Date: </b> {selectedSurvey.data.date}<br></br> 
                <b>Alcohol Servings:  </b> {selectedSurvey.data.alcoholServings} <br></br>
                <b>Sugary Drinks Servings: </b> {selectedSurvey.data.sugaryDrinksServings}<br></br>
                <b>Water Servings: </b> {selectedSurvey.data.waterServings}<br></br>
                <b>Pain Description: </b> {selectedSurvey.data.painDescription}<br></br>
                <b>Stress Amount: </b> {selectedSurvey.data.stressLevel}<br></br>
                <b>Physical Activity Amount: </b> {selectedSurvey.data.physicalActivityAmount}<br></br>
                <b>Reflections: </b>{selectedSurvey.data.reflection}<br></br>

            </div>
    }

    {selectedSurvey.type === 'Doctor' &&
        <div>
            <h2>Doctor Planning</h2>
                <b>Date: </b>{selectedSurvey.data.date}<br></br> 
                <b>Concerns: </b>{selectedSurvey.data.concern}<br></br>

            </div>
    }







    </div>


        <h2>Past Responses</h2>
        <div style={{paddingLeft:"40%"}}>
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



        </div>


            
        
    </div>
}

export default QuestionaireView;