import {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";
import {useMutation} from "@apollo/client";
import {createThreadMutation} from "../../gql/mutation/createThreadMutation";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

export const Thread = () => {
    const activePremiseId = useSelector((state: RootState) => state.premise.activePremiseId);
    const activeThreadId = useSelector((state: RootState) => state.thread.activeThreadId);
    const [comment, setComment] = useState("");
    const [createThread, {data}] = useMutation(createThreadMutation);
    const getVariables = () => {
        return {
            "data": {
                "title": comment,
                "description": comment,
                ...activePremiseId ? {
                    "threadsOnPremise": {
                        "create": {
                            "premise": {
                                "connect": {
                                    "id": activePremiseId
                                }
                            }
                        }
                    }
                }:{},
                ...activeThreadId ? {
                    "parentThread": {
                        "connect": {
                            "id": activeThreadId
                        }
                    }
                }:{}
            }
        };
    };
    const handleSubmit = async () => {
        const result = await createThread({variables: getVariables()});
        console.info(result);
    };
    const handleCancel = () => {
        console.info("------------ggg-----------");
    };
    return <Grid item container justifyContent={"center"}>
        <TextField
                label="Multiline"
                multiline
                maxRows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={handleSubmit}>
            Submit
        </Button>
        <Button onClick={handleCancel} variant={"outlined"}>
            Cancel
        </Button>
    </Grid>;
};