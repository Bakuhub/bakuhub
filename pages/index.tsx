import {MainPage} from "../src/components/MainPage";
import {getSsrApollo} from "../src/lib/apollo";
import {premisesQuery} from "../src/gql/query/premisesQuery";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.info("start==,");
    const apollo = getSsrApollo(context.req);
    console.info(apollo);
    const result = await apollo.query({
                                          query: premisesQuery,
                                          variables: {
                                              "where": {
                                                  "OR": [
                                                      {
                                                          "draftMode": {
                                                              "equals": false
                                                          },
                                                          "AND": [
                                                              {
                                                                  "nextVisions": {
                                                                      "every": {
                                                                          "draftMode": {
                                                                              "equals": true
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              }
                                          }
                                      });
    console.info(result);

    return {
        props: {
            premises: result.data.premises || []
        }, // will be passed to the page component as props
    };
};

export default MainPage;