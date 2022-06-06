import {Grid, Icon, IconButton, TextField} from "@mui/material";
import {useState} from "react";
import {MaterialUIIcons} from "@constants/MaterialUIIcons";

export const RelationCreator = () => {
    const [sourcePremiseId, setSourcePremiseId] = useState("");
    const [targetPremiseId, setTargetPremiseId] = useState("");
    const [relation, setRelation] = useState("");
    const resetTextField = () => {
        setSourcePremiseId("");
        setTargetPremiseId("");
        setRelation("");
    };
    return <Grid item container>
        <TextField
                value={sourcePremiseId}
                onChange={(e) => setSourcePremiseId(e.target.value)}
                label="Source Premise Id"
        />
        <TextField
                value={targetPremiseId}
                onChange={(e) => setTargetPremiseId(e.target.value)}
                label="Target Premise Id"
        />

        <TextField
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                label="Relation"
        />

        <IconButton>
            <Icon>{MaterialUIIcons.add_circle_outline}</Icon>
        </IconButton>
    </Grid>;
};