import {Grid} from "@mui/material";
import {Premise} from "../../../prisma/generated/type-graphql";
import dynamic from "next/dynamic";

const PremiseOverview = dynamic(() => import("../Premise/PremiseOverview"));
export const MainPage = ({premises}: { premises: Premise[] }) => {
    return <Grid container justifyItems={"stretch"} spacing={1}>
        {
            premises.map(
                    premise => <Grid key={premise.id} item
                    ><PremiseOverview premise={premise}/></Grid>
            )
        }
    </Grid>;
};