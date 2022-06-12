import {Grid, Icon, TextField, Typography} from "@mui/material";
import {FunctionComponent, useState} from "react";
import {MaterialUIIcons} from "@constants/MaterialUIIcons";
import {LoadingButton} from "@mui/lab";
import {useSnackbar} from "notistack";

export interface Relation {
    sourceId: string;
    targetId: string;
    relation: string;
}

interface RelationCreatorProps {
    relations: Relation[];
    setRelations: (relations: Relation[]) => void;
}


export const RelationCreator: FunctionComponent<RelationCreatorProps> = (
        {
            relations, setRelations
        }
) => {
    const {enqueueSnackbar} = useSnackbar();
    const [isAddButtonLoading, setIsAddButtonLoading] = useState(false);
    const [sourceId, setSourceId] = useState("");
    const [targetId, setTargetId] = useState("");
    const [relation, setRelation] = useState("");
    const resetInput = () => {
        setSourceId("");
        setTargetId("");
        setRelation("");
    };
    const addRelationBetweenPremises = () => {
        if (sourceId && targetId && relation) {
            setIsAddButtonLoading(true);
            setRelations(
                    [...relations, {sourceId, targetId, relation}]);
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
        <TextField
                required
                value={sourceId}
                onChange={(e) => setSourceId(e.target.value)}
                label="Source Premise Id"
        />
        <TextField
                required
                value={targetId}
                onChange={(e) => setTargetId(e.target.value)}
                label="Target Premise Id"
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
