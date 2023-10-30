import 'survey-core/defaultV2.min.css';
import morningQuestionaire from './morning.json'

import {Model } from 'survey-core';
import {Survey} from 'survey-react-ui'
import { BorderlessLight } from "survey-core/themes/borderless-light";



function Morning() {

    const survey = new Model(morningQuestionaire);
    survey.applyTheme(BorderlessLight)

survey.onComplete.add(function (sender, options) {
  // Display the "Saving..." message (pass a string value to display a custom message)
  options.showSaveInProgress();
  const xhr = new XMLHttpRequest();
//   xhr.open("POST", "your/server/url");
//   xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
//   xhr.onload = xhr.onerror = function () {
//     if (xhr.status == 200) {
//       // Display the "Success" message (pass a string value to display a custom message)
//       options.showSaveSuccess();
//       // Alternatively, you can clear all messages:
//       // options.clearSaveMessages();
//     } else {
//       // Display the "Error" message (pass a string value to display a custom message)
//       options.showSaveError();
//     }
//   };
//   xhr.send(JSON.stringify(sender.data));
console.log(sender.data);
});


    return <div>
        
        <h1>Good Morning</h1>
        <h3>Let's plan for a good day</h3>
        <Survey model={survey} />
        
        </div>;
}

export default Morning;