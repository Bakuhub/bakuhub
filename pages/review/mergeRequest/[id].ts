import {getSsrApollo} from "src/lib/apollo";
import {VisionMergeRequest} from "src/components/Vision/MergeRequest";
import {mergeRequestQuery} from "src/gql/query/mergeRequestQuery";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const apollo = getSsrApollo(context.req);
    const {data} = await apollo.query({
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

};


export default VisionMergeRequest;