import dynamic from "next/dynamic";
import {Grid} from "@mui/material";
import {Premise} from "../../../../prisma/generated/type-graphql";
import {FunctionComponent} from "react";

const PremiseOverview = dynamic(() => import("src/components/Premise/PremiseOverview"));

interface PremiseListsProps {
    premises: Premise[];
}

export const PremiseLists: FunctionComponent<PremiseListsProps> = ({premises}) => {
    return <Grid container justifyItems={"stretch"} spacing={1}>
        {
            premises.map(
                    premise => <Grid key={premise.id} item
                    ><PremiseOverview premise={premise}/></Grid>
            )
        }
    </Grid>;
};