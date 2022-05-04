import {MainPage} from "../src/components/MainPage";
import apolloClient from "../src/lib/apollo";
import {premisesQuery} from "../src/gql/query/premisesQuery";

export async function getServerSideProps() {
    const {data} = await apolloClient.query({
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
    return {
        props: {
            premises: data.premises
        }, // will be passed to the page component as props
    };
}

export default MainPage;