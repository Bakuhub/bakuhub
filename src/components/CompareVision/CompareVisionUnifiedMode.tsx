import {FunctionComponent} from "react";
import {Change} from "diff";
import {Grid, Typography} from "@mui/material";
import {getCompareDiffColorSchema} from "src/utils/getCompareDiffColorSchema";

export interface CompareVisionUnifiedModeProps {
    title: Change[];
    description: Change[];
}

export const CompareVisionUnifiedMode: FunctionComponent<CompareVisionUnifiedModeProps> = ({
                                                                                               title,
                                                                                               description
                                                                                           }) => {
    return <Grid item container>
        <Grid item xs={12}>{
            title.map((change, index) => {
                const colorScheme = getCompareDiffColorSchema(change);
                return <Typography sx={
                    {
                        display: "inline-block",
                    }
                } {...colorScheme} variant={"h3"} key={change.value}>
                    {change.value}
                </Typography>;
            })
        }</Grid>
        <Grid item xs={12}>
            {
                description.map((change, index) => {
                    const colorScheme = getCompareDiffColorSchema(change);
                    return <Typography sx={
                        {
                            display: "inline"
                        }
                    } {...colorScheme} variant={"subtitle1"} key={change.value}>
                        {change.value}
                    </Typography>;
                })
            }
        </Grid>
    </Grid>;


};