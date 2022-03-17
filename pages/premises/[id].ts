import PremiseOverview from "../../src/components/Premise";
import {premiseQuery} from "../../src/gql/query/premiseQuery";
import {serverApollo} from "../../src/lib/serverApollo";

export async function getServerSideProps<GetServerSideProps>(context: { query: { id: any; }; }) {

    const data = await serverApollo.query({
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
            premise: data.data

        }, // will be passed to the page component as props
    };
}


export default PremiseOverview;