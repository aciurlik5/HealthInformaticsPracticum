import 'survey-core/defaultV2.min.css';
import morningQuestionaire from './morning.json'

import {Model } from 'survey-core';
import {Survey} from 'survey-react-ui'
import { BorderlessLight } from "survey-core/themes/borderless-light";
import {
  createMorningQuestionnaire as createMorningQuestionnaireMutation,

} from "../../graphql/mutations";
import { API } from "aws-amplify";

function Morning() {



    const survey = new Model(morningQuestionaire);
    survey.applyTheme(BorderlessLight)

survey.onComplete.add(async function (sender, options) {
  // Display the "Saving..." message (pass a string value to display a custom message)
options.showSaveInProgress();
console.log(sender.data);
  let sleepIssueFalling = sender.data["sleep-quality"].includes("Difficulty falling asleep")
  let sleepIssueStaying = sender.data["sleep-quality"].includes("Difficulty staying asleep")
  let sleepIssueLeaveBed = sender.data["sleep-quality"].includes("Difficulty getting out of bed")
  let sleepIssueNotRested = sender.data["sleep-quality"].includes("Not feeling rested in the morning")
  let data = {
    date: new Date().toISOString().substring(0,10),
    sleepAmount: parseInt(sender.data["sleep-amount"]),
    sleepIssueFallingAsleep: sleepIssueFalling,
    sleepIssueStayingAsleep: sleepIssueStaying,
    sleepIssueBedLeave: sleepIssueLeaveBed,
    sleepIssueRested: sleepIssueNotRested,
    goal: sender.data["daily-goals"],
    stressLevel: parseInt(sender.data["stress-amount"])


  };
  await API.graphql({
  query: createMorningQuestionnaireMutation,
  variables: { input: data },
});


});


    return <div>
        
        <h1>Good Morning</h1>
        <h3>Let's plan for a good day</h3>
        <Survey model={survey} />
        
        </div>;
}

export default Morning;