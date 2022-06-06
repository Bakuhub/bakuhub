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
import Link from "next/link";

export interface BaseRelationButtonProps {
    sourceVisionId?: string;
    targetVisionId?: string;
    draftMode?: boolean;
    searchMode: "AND" | "OR";
    label?: string;
}

export const BaseRelationButton: FunctionComponent<BaseRelationButtonProps> = (
        props
) => {
    const {
        label,
        sourceVisionId,
        targetVisionId,
        draftMode,
        searchMode
    } = props;
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

    const getLink = () => {
        console.log(new URLSearchParams(
                JSON.parse(JSON.stringify(props))).toString());
    };
    const link = getLink();
    return <Link passHref href={`/relation/pending?${new URLSearchParams(
            JSON.parse(JSON.stringify(props))).toString()}`}>
        <Button>
            {label} {get(data, "aggregateRelationBetweenVisions._count._all")}
        </Button>
    </Link>;
};

