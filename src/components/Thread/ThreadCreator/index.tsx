import {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";
import {useMutation} from "@apollo/client";
import {createThreadMutation} from "../../../gql/mutation/createThreadMutation";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {getThreadsOnConnectorVariables} from "../../../utils/getThreadsOnConnectorVariables";

export const ThreadCreator = () => {
    const activePremiseId = useSelector((state: RootState) => state.premise.activePremiseId);
    const connectorId = useSelector((state: RootState) => state.thread.connector.id);
    const connectorType = useSelector((state: RootState) => state.thread.connector.type);
    const parentThreadId = useSelector((state: RootState) => state.thread.parentThreadId);

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
                ...getThreadsOnConnectorVariables({id: connectorId, type: connectorType}),
                ...parentThreadId ? {
                    "parentThread": {
                        "connect": {
                            "id": parentThreadId
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