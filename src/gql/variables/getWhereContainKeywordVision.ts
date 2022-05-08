export const getWhereContainKeywordVision = (keyword: string) => {
    if (keyword !== "") {
        return {
            OR: [
                {
                    "title": {
                        "contains": keyword
                    }
                },
                {
                    "description": {
                        "contains": keyword
                    }
                }
            ]
        };
    }
    return {};
};