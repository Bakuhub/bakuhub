export const getWhereEqualTagVision = (tag: unknown) => {

    if (typeof tag === "string" && tag) {
        return (
                {

                    "tagsOnVisions": {
                        "some": {
                            "tag": {
                                "is": {
                                    "label": {
                                        "equals": tag
                                    }
                                }
                            }
                        }
                    }
                }
        );
    }
    return {};
};
