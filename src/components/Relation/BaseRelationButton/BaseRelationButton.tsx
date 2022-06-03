import {Button} from "@mui/material";
import {useQuery} from "@apollo/client";
import {
    aggregateRelationBetweenVisionsQuery
} from "@gql/query/aggregateRelationBetweenVisionsQuery";
import {
    getAggregateRelationBetweenVisionsQueryVariable
} from "@gql/utils/getAggregateRelationBetweenVisionsQueryVariable";
import {FunctionComponent, useEffect} from "react";
import get from "lodash/get";

export interface BaseRelationButtonProps {
    sourceVisionId?: string;
    targetVisionId?: string;
    draftMode?: boolean;
    searchMode: "AND" | "OR";

}

export const BaseRelationButton: FunctionComponent<BaseRelationButtonProps> = (
        {
            sourceVisionId,
            targetVisionId,
            draftMode,
            searchMode
        }
) => {

    const {data} = useQuery(
            aggregateRelationBetweenVisionsQuery,
            getAggregateRelationBetweenVisionsQueryVariable(
                    {
                        sourceVisionId,
                        targetVisionId,
                        draftMode,
                        searchMode
                    }
            )
    );
    useEffect(() => {
        console.info("data=>>>OPO");
    }, [data]);
    return <Button>
        {get(data, "aggregateRelationBetweenVisions._count._all")}
    </Button>;
};