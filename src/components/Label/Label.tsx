import {StyledChip} from "@components/Label/Label.styled";
import {LabelType} from "src/types";
import {FunctionComponent} from "react";

interface LabelChipProps {
    label: LabelType;
}

export const LabelChip: FunctionComponent<LabelChipProps> = ({
                                                                 label: {
                                                                     name, color, description
                                                                 }
                                                             }) => {
    return <StyledChip labelColor={color} aria-details={description}/>;
};