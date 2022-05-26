import {Vision} from "prisma/generated/type-graphql";
import {FunctionComponent, useState} from "react";
import {Button, ButtonGroup, Grid} from "@mui/material";
import {diffChars} from "diff";
import {CompareVisionUnifiedMode} from "@components/CompareVision/CompareVisionUnifiedMode";
import {CompareVisionSplitMode} from "@components/CompareVision/CompareVisionSplitMode";

export interface CompareVisionProps {
    sourceVision: Vision;
    targetVision: Vision;
}

export enum CompareDiffViewMode {
    unified = "unified",
    split = "split"
}

export const CompareVision: FunctionComponent<CompareVisionProps> = ({
                                                                         sourceVision, targetVision
                                                                     }) => {
    const [mode, setMode] = useState(CompareDiffViewMode.split);
    const visionTitle = diffChars(sourceVision.title, targetVision.title);
    const visionDescription = diffChars(
            sourceVision.description || "",
            targetVision.description || "",
    );

    return <Grid item container>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {
                Object.values(CompareDiffViewMode).map(viewMode =>
                                                               <Button
                                                                       key={viewMode}
                                                                       variant={viewMode === mode
                                                                                ? "contained"
                                                                                :"outlined"}
                                                                       onClick={() => setMode(
                                                                               viewMode)}>{viewMode}</Button>)
            }
        </ButtonGroup>
        {
                mode === CompareDiffViewMode.split &&
                <CompareVisionSplitMode description={visionDescription} title={visionTitle}/>
        }
        {
                mode === CompareDiffViewMode.unified &&
                <CompareVisionUnifiedMode description={visionDescription} title={visionTitle}/>
        }
    </Grid>;
};