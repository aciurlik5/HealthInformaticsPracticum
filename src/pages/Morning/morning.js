import 'survey-core/defaultV2.min.css';
import morningQuestionaire from './morning.json'

import {Model } from 'survey-core';
import {Survey} from 'survey-react-ui'
import { BorderlessLight } from "survey-core/themes/borderless-light";
import {
  createMorningQuestionnaire 
} from "../../graphql/mutations"


function Morning() {



    const survey = new Model(morningQuestionaire);
    survey.applyTheme(BorderlessLight)

survey.onComplete.add(function (sender, options) {
  // Display the "Saving..." message (pass a string value to display a custom message)
  options.showSaveInProgress();
  const xhr = new XMLHttpRequest();
console.log(sender.data);
// createMorningQuestionnaire(sender.data['sleep-amount'], false, false, false, sender.data['stress-amount'], sender.data['daily-goals'], false );

// sleepAmount
// sleepIssueFallingAsleep
// sleepIssueStayingAsleep
// sleepIssueBedLeave
// stressLevel
// goal
// sleepIssueRested
});


    return <div>
        
        <h1>Good Morning</h1>
        <h3>Let's plan for a good day</h3>
        <Survey model={survey} />
        
        </div>;
}

export default Morning;