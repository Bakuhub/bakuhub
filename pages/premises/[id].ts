import PremiseOverview from "../../src/components/Premise";
import {premiseQuery} from "../../src/gql/query/premiseQuery";
import apolloClient from "../../src/lib/apollo";

export async function getServerSideProps<GetServerSideProps>(context: { query: { id: any; }; }) {
    console.log(context.query.id);
    const data = await apolloClient.query({
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
    });
    console.info("-============================");
    console.info(data);
    return {
        props: {
            premise: data.data

        }, // will be passed to the page component as props
    };
}


export default PremiseOverview;