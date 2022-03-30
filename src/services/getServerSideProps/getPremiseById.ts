import apollo from "../../lib/apollo";
import {premiseQuery} from "../../gql/query/premiseQuery";

export const getPremiseById = async (premiseId: string) => {
    const {data: {premise}} = await apollo.query({
        query: premiseQuery, variables: {
            "where": {
                "id": premiseId
            },
            "visionWhere2": {
                "OR": [
                    {
                        "draftMode": {
                            "equals": true
                        }
                    }, {

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
                ]
            }
        }
    });
    return premise;

};


