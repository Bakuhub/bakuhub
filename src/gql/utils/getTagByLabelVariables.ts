export const getTagByLabelVariables = (label: string) => (
        {
            variables: {
                "where": {
                    "label": {
                        "contains": label
                    }
                }
            }
        }
);