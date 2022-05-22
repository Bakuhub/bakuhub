import {Vision} from "prisma/generated/type-graphql";
import {Grid} from "@mui/material";
import VisionOverview from "../VisionOverview";
import * as React from "react";
import {FunctionComponent} from "react";

export interface VisionListsProps {
    visions: Vision[];
}

export const VisionLists: FunctionComponent<VisionListsProps> = ({visions}) => {
    return <Grid container justifyItems={"stretch"} spacing={1}>
        {
            visions.map(
                    vision => <Grid key={vision.id} item
                    ><VisionOverview vision={vision} premiseId={vision.premiseId}/></Grid>
            )
        }
    </Grid>;
};