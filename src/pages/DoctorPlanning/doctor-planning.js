import 'survey-core/defaultV2.min.css';
import doctorPlanning from './doctor-planning.json'

import {Model } from 'survey-core';
import {Survey} from 'survey-react-ui'
import { BorderlessLight } from "survey-core/themes/borderless-light";


// ...
function DoctorPlanning() {

    const survey = new Model(doctorPlanning);
    survey.applyTheme(BorderlessLight)

    return <div>

        <h3>Let's plan for a productive visit with your physician</h3>
        <Survey model={survey} />
        
        </div>;
}

export default DoctorPlanning;