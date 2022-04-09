export const getActiveVisionVariable = () => (
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
        }
);