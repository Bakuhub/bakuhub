import {getSsrApollo} from "src/lib/apollo";
import {GetServerSideProps} from "next";
import {getMergeRequestsQuery} from "../../../../src/gql/query/mergeRequestsQuery";
import {MergeRequestsList} from "../../../../src/components/MergeRequest/MergeRequestsList/MergeRequestsList";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const visionId = context.query.visionId;
    console.info(context.query);
    const apollo = getSsrApollo(context.req);
    const {data} = await apollo.query({
                                          query: getMergeRequestsQuery(),
                                          variables: {
                                              where: {
                                                  vision: {
                                                      is: {
                                                          prevVision: {
                                                              is: {
                                                                  id: {
                                                                      equals: visionId
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  },
                                                  status: {
                                                      equals: "OPEN"
                                                  }
                                              }
                                          }
                                      });
    return {
        props: {
            mergeRequests: data.mergeRequests
        }
    };
};

export default MergeRequestsList;