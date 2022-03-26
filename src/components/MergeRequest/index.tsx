import {Grid, TextField} from "@mui/material";
import {FunctionComponent} from "react";

export interface MergeRequestProps {
    mergeRequestTitle: string;
    mergeRequestDescription: string;
    setMergeRequestDescription: (mergeRequestDescription: string) => void;
    setMergeRequestTitle: (mergeRequestTitle: string) => void;
}

export const MergeRequest: FunctionComponent<MergeRequestProps> = ({

                                                                       mergeRequestDescription,
                                                                       mergeRequestTitle,
                                                                       setMergeRequestDescription,
                                                                       setMergeRequestTitle
                                                                   }) => {
    return <Grid spacing={1} item container xs={12}>
        <Grid item xs={12}>
            <TextField
                    fullWidth
                    onChange={({target: {value}}) => setMergeRequestTitle(value)}
                    value={mergeRequestTitle}
                    label="MergeRequest"
                    variant="outlined"
            /></Grid>
        <Grid item xs={12}>
            <TextField
                    multiline
                    fullWidth
                    onChange={({target: {value}}) => setMergeRequestDescription(value)}
                    value={mergeRequestDescription}
                    rows={3}
                    label="Description"
                    variant="outlined"
            /> </Grid>
    </Grid>;

};