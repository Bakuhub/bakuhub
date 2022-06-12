import {Button} from "@mui/material";
import {FunctionComponent} from "react";
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
    // const {data} = useQuery(
    //         aggregateRelationBetweenVisionsQuery,
    //         getAggregateRelationBetweenVisionsQueryVariable(
    //                 {
    //                     sourceVisionId,
    //                     targetVisionId,
    //                     draftMode,
    //                     searchMode
    //                 }
    //         )
    // );
    // useEffect(() => {
    //     console.info("data=>>>OPO");
    // }, [data]);
    //
    // const getLink = () => {
    //     console.log(new URLSearchParams(
    //             JSON.parse(JSON.stringify(props))).toString());
    // };
    return <Link passHref href={`/relation/pending?${new URLSearchParams(
            JSON.parse(JSON.stringify(props))).toString()}`}>
        <Button>
            {label}
        </Button>
    </Link>;
};

