import {Grid, Icon, TextField, Typography} from "@mui/material";
import {FunctionComponent, useState} from "react";
import {MaterialUIIcons} from "@constants/MaterialUIIcons";
import {LoadingButton} from "@mui/lab";
import {useSnackbar} from "notistack";
import PremiseIdAutoComplete from "@components/Premise/PremiseIdAutoComplete";
import {Vision} from "prisma/generated/type-graphql";

export interface Relation {
    sourceId: string;
    targetId: string;
    relation: string;
}

interface RelationCreatorProps {
    relations: Relation[];
    currentVisionId: string;
    setRelations: (relations: Relation[]) => void;
}


export const RelationCreator: FunctionComponent<RelationCreatorProps> = (
        {
            currentVisionId,
            relations, setRelations
        }
) => {
    const {enqueueSnackbar} = useSnackbar();
    const [isAddButtonLoading, setIsAddButtonLoading] = useState(false);
    const [sourceVision, setSourceVision] = useState<Vision | null>();
    const [targetVision, setTargetVision] = useState<Vision | null>();
    const [relation, setRelation] = useState("");
    const resetInput = () => {
        setTargetVision(null);
        setSourceVision(null);
        setRelation("");
    };
    const addRelationBetweenPremises = () => {
        const sourceId = sourceVision?.premise?.id;
        const targetId = targetVision?.premise?.id;
        if (targetId && sourceId && relation) {
            setIsAddButtonLoading(true);
            setRelations(
                    [
                        ...relations, {
                        sourceId,
                        targetId,
                        relation
                    }
                    ]);
            resetInput();
            setIsAddButtonLoading(false);
        } else {
            enqueueSnackbar("Please fill all the fields", {variant: "error"});
        }
    };
    const removeRelationBetweenPremises = (index: number) => {
        setRelations(
                relations.reduce(
                        (acc: Relation[], curr, i) =>
                                i === index ? acc:[...acc, curr],
                        []
                ));
    };
    return <Grid item container>
        <PremiseIdAutoComplete
                currentVisionId={currentVisionId}
                value={targetVision}
                handleChange={setTargetVision}/>
        <PremiseIdAutoComplete
                currentVisionId={currentVisionId}
                value={sourceVision}
                handleChange={setSourceVision}
        />

        <TextField
                required
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                label="Relation"
        />
        <LoadingButton loading={isAddButtonLoading} onClick={addRelationBetweenPremises}
                       variant={"outlined"}>
            <Icon>{MaterialUIIcons.add_circle_outline}</Icon>
        </LoadingButton>
        {
            relations.map(
                    ({sourceId, targetId, relation}, index) =>
                            <Grid xs={12} key={`${sourceId}-${targetId}`}>
                                <Typography>
                                    {sourceId}{targetId}{relation}
                                </Typography>
                                <LoadingButton onClick={() => removeRelationBetweenPremises(index)}>
                                    <Icon>{MaterialUIIcons.delete}</Icon>
                                </LoadingButton>
                            </Grid>)
        }
    </Grid>;
};
