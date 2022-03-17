import PremiseOverview from "../../src/components/Premise";
import {premiseQuery} from "../../src/gql/query/premiseQuery";
import apollo from "../../src/lib/apollo";

export async function getServerSideProps<GetServerSideProps>(context: { query: { id: any; }; }) {

    const {data: {premise}} = await apollo.query({
        query: premiseQuery, variables: {
            "where": {
                "id": context.query.id
            },
            "visionWhere2": {
                "prevVisionId": {
                    "equals": null
                }
            }
        }
    },);
    return {
        props: {
            premise
        }, // will be passed to the page component as props
    };
}


export default PremiseOverview;