import {LabelType} from "src/types";
import {FunctionComponent} from "react";
import LabelChip from "@components/Label";
import {Grid} from "@mui/material";

interface MergeRequestLabelsProps {
    labelsOnConnectType?: { label?: LabelType }[];
}

export const MergeRequestLabels: FunctionComponent<MergeRequestLabelsProps> = ({labelsOnConnectType}) => {
    const existingLabels = labelsOnConnectType?.reduce((acc: LabelType[], labelOnConnectType,) => (
                                                                                                          labelOnConnectType.label
                                                                                                  )
                                                                                                  ? [
                ...acc, labelOnConnectType.label
            ]:acc, []);
    return <Grid item container spacing={1}> {existingLabels?.map((label) =>
                                                                          <Grid item
                                                                                key={label.name}
                                                                          ><LabelChip
                                                                                  label={label}
                                                                          /></Grid>)}</Grid>;
};
