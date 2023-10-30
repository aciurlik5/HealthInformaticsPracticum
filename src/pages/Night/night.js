import 'survey-core/defaultV2.min.css';
import nightQuestionaire from './night.json'

import {Model } from 'survey-core';
import {Survey} from 'survey-react-ui'
import { BorderlessLight } from "survey-core/themes/borderless-light";
// ...
function Night() {
    const survey = new Model(nightQuestionaire);
    survey.applyTheme(BorderlessLight)

    return <div>
        <h1>Good Evening!</h1>
        <h3>Let's reflect on your day.</h3>
        
        <Survey model={survey} />
        
        
        
    </div> ;
}

export default Night;