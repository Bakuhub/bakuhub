import apollo from "../../../src/lib/apollo";
import {visionQuery} from "../../../src/gql/query/visionQuery";
import {VisionMergeRequest} from "../../../src/components/Vision/MergeRequest";

export async function getServerSideProps<GetServerSideProps>(context: { query: { id: any; }; }) {
    const {data: {vision}} = await apollo.query({
        query: visionQuery, variables: {
            "where": {
                "id": context.query.id
            },
        }
    },);
    return {
        props: {
            vision
        }, // will be passed to the page component as props
    };
}


export default VisionMergeRequest;