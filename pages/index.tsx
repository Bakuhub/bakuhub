import {MainPage} from "../src/components/MainPage";
import {ssrApolloClient} from "../src/lib/apollo";
import {premisesQuery} from "../src/gql/query/premisesQuery";

export async function getServerSideProps() {
    console.info("start");
    const result = await ssrApolloClient.query({
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
}

export default MainPage;