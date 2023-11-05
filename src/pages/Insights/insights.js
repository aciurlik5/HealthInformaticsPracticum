
import { API, } from "aws-amplify";
import { listMorningQuestionnaire } from "../../graphql/queries";




function Insights() {

    async function fetchData(){
     let morningData = await API.graphql({query: listMorningQuestionnaire, variables:{'_deleted': false}})
     console.log(morningData);

    }


    return <div>
        
        <h1>Insights</h1>
     
        
    </div>;
}

export default Insights;