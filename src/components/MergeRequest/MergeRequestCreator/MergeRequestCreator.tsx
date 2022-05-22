import {Grid, TextField} from "@mui/material";
import {FunctionComponent} from "react";
import MergeRequestLabelSelect
    from "@components/MergeRequest/MergeRequestCreator/MergeRequestLabelSelect";
import {LabelType} from "src/types";

export interface MergeRequestProps {
    setMergeRequestLabels: (labels: LabelType[]) => void;
    mergeRequestLabels: LabelType[];
    mergeRequestTitle: string;
    mergeRequestDescription: string;
    setMergeRequestDescription: (mergeRequestDescription: string) => void;
    setMergeRequestTitle: (mergeRequestTitle: string) => void;
}

export const MergeRequestCreator: FunctionComponent<MergeRequestProps> = ({
                                                                              setMergeRequestLabels,
                                                                              mergeRequestLabels,
                                                                              mergeRequestDescription,
                                                                              mergeRequestTitle,
                                                                              setMergeRequestDescription,
                                                                              setMergeRequestTitle
                                                                          }) => {
    return <Grid spacing={1} item container xs={12}>
        <Grid item md={8} lg={10} xs={6}>
            <TextField
                    fullWidth
                    onChange={({target: {value}}) => setMergeRequestTitle(value)}
                    value={mergeRequestTitle}
                    label="MergeRequest Title"
                    variant="outlined"
                    helperText={"title will represent the merge request"}
            />
            <TextField
                    helperText={"describe what this change is about"}
                    multiline
                    fullWidth
                    onChange={({target: {value}}) => setMergeRequestDescription(value)}
                    value={mergeRequestDescription}
                    rows={3}
                    label="Description"
                    variant="outlined"
            />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
            <MergeRequestLabelSelect
                    labels={mergeRequestLabels}
                    setLabels={setMergeRequestLabels}

            />
        </Grid>
    </Grid>;

};

