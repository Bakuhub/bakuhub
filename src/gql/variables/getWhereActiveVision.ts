export const getWhereActiveVision = () => {
    return {
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
    };
};