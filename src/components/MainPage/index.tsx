import {Grid} from "@mui/material";
import {Premise} from "../../../prisma/generated/type-graphql";
import dynamic from "next/dynamic";

const PremiseOverview = dynamic(() => import("../Premise/PremiseOverview"));
export const MainPage = ({premises}: { premises: Premise[] }) => {
    console.info(premises);
    return <Grid container spacing={1}>
        {
            premises.map(
                    premise => <Grid key={premise.id} item
                    ><PremiseOverview premise={premise}/></Grid>
            )
        }
    </Grid>;
};