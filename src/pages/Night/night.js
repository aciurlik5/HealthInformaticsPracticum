import 'survey-core/defaultV2.min.css';
import nightQuestionaire from './night.json'

import {Model } from 'survey-core';
import {Survey} from 'survey-react-ui'
import { BorderlessLight } from "survey-core/themes/borderless-light";

import {

    createNightQuestionnaire as createNightQuestionnaireMutation,
  
  } from "../../graphql/mutations";

import { API, Auth } from "aws-amplify";


function Night() {
    const survey = new Model(nightQuestionaire);
    survey.applyTheme(BorderlessLight);
    let userEmail;
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      userEmail= attributes['email'];
    })


    survey.onComplete.add(async function (sender, options) {
        // Display the "Saving..." message (pass a string value to display a custom message)
      options.showSaveInProgress();
      console.log(sender.data);

        let data = {
            date: new Date().toISOString().substring(0,10),
            alcoholServings: parseInt(sender.data["alchol-amount"]),
            sugaryDrinksServings: parseInt(sender.data["sweet-drink-amount"]),
            waterServings: parseInt(sender.data["water-amount"]),
            isPain: sender.data["pain-indication"] === "Yes",
            painDescription: sender.data["pain-description"],
            stressLevel: sender.data["stress-amount"],
            physicalActivityAmount: parseInt(sender.data["exercise"]),
            reflection: sender.data["daily-goals-reflection"],
            userEmail: userEmail
        };

     
        await API.graphql({
        query: createNightQuestionnaireMutation,
        variables: { input: data },
      });
    });

    return <div>
        <h1>Good Evening!</h1>
        <h3>Let's reflect on your day.</h3>
        
        <Survey model={survey} />
        
        
        
    </div> ;
}

export default Night;