import {FunctionComponent} from "react";
import {Change} from "diff";
import {Grid, Typography} from "@mui/material";
import {getCompareDiffColorSchema} from "src/utils/getCompareDiffColorSchema";

export interface CompareVisionUnifiedModeProps {
    title: Change[];
    description: Change[];
}

export const CompareVisionSplitMode: FunctionComponent<CompareVisionUnifiedModeProps> = ({
                                                                                             title,
                                                                                             description
                                                                                         }) => {
    return <Grid item container>
        <Grid item container xs={6} data-testid={"source vision"}>
            <Grid item xs={12}>{
                title.map((change, index) => {
                    if (!change.added) {
                        const colorScheme = getCompareDiffColorSchema(change);
                        return <Typography sx={
                            {
                                display: "inline-block",
                            }
                        } {...colorScheme} variant={"h3"} key={change.value}>
                            {change.value}
                        </Typography>;
                    }
                })
            }</Grid>
            <Grid item xs={12}>
                {
                    description.map((change, index) => {
                        if (!change.added) {

                            const colorScheme = getCompareDiffColorSchema(change);
                            return <Typography sx={
                                {
                                    display: "inline"
                                }
                            } {...colorScheme} variant={"subtitle1"}
                                               key={change.value}>
                                {change.value}
                            </Typography>;
                        }
                    })
                }
            </Grid>
        </Grid>
        <Grid item container xs={6} data-testid={"target vision"}>
            <Grid item xs={12}>{
                title.map((change, index) => {
                    if (!change.removed) {
                        const colorScheme = getCompareDiffColorSchema(change);
                        return <Typography sx={
                            {
                                display: "inline-block",
                            }
                        } {...colorScheme} variant={"h3"} key={change.value}>
                            {change.value}
                        </Typography>;
                    }
                })
            }</Grid>
            <Grid item xs={12}>
                {
                    description.map((change, index) => {
                        if (!change.removed) {
                            const colorScheme = getCompareDiffColorSchema(change);
                            return <Typography sx={
                                {
                                    display: "inline"
                                }
                            } {...colorScheme} variant={"subtitle1"} key={change.value}>
                                {change.value}
                            </Typography>;
                        }
                    })
                }
            </Grid>
        </Grid>
    </Grid>;


};