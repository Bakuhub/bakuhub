import {GetVisionsByKeywordArgs} from "../helper/getVisionsByKeywordArgs";

export const getSearchActiveVisionByKeywordVariable = ({
                                                           keyword, skip, take
                                                       }: GetVisionsByKeywordArgs) => (
        {
            variables: {
                "where": {
                    "AND": [
                        {
                            "draftMode": {
                                "equals": false
                            },
                            "nextVisions": {
                                "every": {
                                    "draftMode": {
                                        "equals": true
                                    }
                                }
                            }
                        }, {
                            "OR": [
                                {
                                    "title": {
                                        "contains": keyword
                                    },

                                }, {
                                    "description": {
                                        "contains": keyword
                                    }
                                }
                            ],
                        }
                    ]
                }
                ,
                take,
                skip,
            }
        }
);
