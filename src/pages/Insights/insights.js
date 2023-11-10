
import { API, } from "aws-amplify";
import { listMorningQuestionnaires, listNightQuestionnaires } from "../../graphql/queries";




function Insights() {

    async function fetchData(){
     let morningData = await API.graphql({query: listMorningQuestionnaires, variables:{'_deleted': false}})
     let nightData = await API.graphql({query: listNightQuestionnaires, variables:{'_deleted': false}})
     console.log('Data')
     console.log(morningData);
     console.log(nightData)

    }

    fetchData();
    return <div>
        
        <h1>Insights</h1>
     
        
    </div>;
}

export default Insights;