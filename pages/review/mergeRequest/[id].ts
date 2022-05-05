import {ssrApolloClient} from "../../../src/lib/apollo";
import {VisionMergeRequest} from "../../../src/components/Vision/MergeRequest";
import {mergeRequestQuery} from "../../../src/gql/query/mergeRequestQuery";

export async function getServerSideProps<GetServerSideProps>(context: { query: { id: any; }; }) {
    const {data} = await ssrApolloClient.query({
                                                   query: mergeRequestQuery, variables: {
            "where": {
                "id": context.query.id
            }
        }
                                               });

    return {
        props: {
            mergeRequest: data.mergeRequest
        }, // will be passed to the page component as props
    };

}


export default VisionMergeRequest;