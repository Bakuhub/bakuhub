import {getSsrApollo} from "src/lib/apollo";
import {GetServerSideProps} from "next";
import {getMergeRequestsQuery} from "@gql/query/mergeRequestsQuery";
import {MergeRequestsList} from "@components/MergeRequest/MergeRequestsList/MergeRequestsList";

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
    );
    const premiseId = context.query.premiseId;
    console.info(context.query);
    const apollo = getSsrApollo(context.req);
    const {data} = await apollo.query({
                                          query: getMergeRequestsQuery(),
                                          variables: {
                                              where: {
                                                  vision: {
                                                      is: {
                                                          premiseId: {
                                                              equals: premiseId
                                                          }
                                                      }
                                                  },
                                                  status: {
                                                      equals: "OPEN"
                                                  }
                                              },
                                              orderBy: [
                                                  {
                                                      vision: {
                                                          createdAt: "desc"
                                                      }
                                                  }
                                              ]
                                          }
                                      });
    return {
        props: {
            mergeRequests: data.mergeRequests
        }
    };
};

export default MergeRequestsList;