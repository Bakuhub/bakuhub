import {Avatar, Button, Grid, TextField} from "@mui/material";
import {useState} from "react";
import {FunctionalComponent} from "preact";
import {useSession} from "next-auth/react";
import {getUserAvatar} from "../../utils/getUserAvatar";
import {ThreadConnectConfig} from "../../store/slices/threadSlice";
import {getThreadsOnConnectorVariables} from "../../utils/getThreadsOnConnectorVariables";
import {useMutation} from "@apollo/client";
import {createThreadMutation} from "../../gql/mutation/createThreadMutation";
import {LoadingButton} from "@mui/lab";
import {useSnackbar} from "notistack";
import {getAuthorVariableByUserId} from "../../gql/utils/getAuthorVariableByUserId";
import {getUserIdBySession} from "../../utils/getUserIdBySession";


export interface CommentProps {
    handleCancel?: () => void;
    connectConfig: ThreadConnectConfig;
    handleSubmitCallback?: () => void;
}

export const Comment: FunctionalComponent<CommentProps> = ({
                                                               handleSubmitCallback,
                                                               connectConfig, handleCancel
                                                           }) => {
    const session = useSession();
    console.info(connectConfig);
    console.info("-------------------------");
    const {enqueueSnackbar} = useSnackbar();
    const avatarProps = getUserAvatar(session.data?.user);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);
    const [createThread] = useMutation(createThreadMutation);
    const getVariables = () => {
        return {
            "data": {
                "title": comment,
                author: {
                    connect: {
                        id: ""
                    }
                },
                "description": comment,
                ...getAuthorVariableByUserId(getUserIdBySession(session)),
                ...getThreadsOnConnectorVariables(connectConfig),
                ...connectConfig.parentThreadId ? {
                    "parentThread": {
                        "connect": {
                            "id": connectConfig.parentThreadId
                        }
                    }
                }:{}
            }
        };
    };
    const handleSubmit = async () => {
        setLoading(true);
        enqueueSnackbar("submitting comment", {
            variant: "info"
        });
        try {
            await createThread({variables: getVariables()});
            enqueueSnackbar("submitting comment success", {variant: "success"});
        } catch (e) {
            enqueueSnackbar("something went wrong, you can not post comment", {variant: "error"});
        }
        if (handleSubmitCallback)
            handleSubmitCallback();
        if (handleCancel)
            handleCancel();
        setLoading(false);
        setComment("");
    };
    return <Grid item container alignItems={"center"} xs={12}>
        <Grid item container xs={1} md={.5} justifyContent={"flex-end"}
              alignContent={"flex-end"}>
            <Avatar style={{
                marginRight: "10px"
            }
            }
                    {...avatarProps} sx={{width: 24, height: 24}}
            />
        </Grid>
        <Grid item container xs={11} md={11.5}>
            <TextField
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder={"Add a comment..."}
                    fullWidth
                    multiline
                    variant={"standard"}
                    autoFocus
            />
        </Grid>
        <Grid item container justifyContent={"flex-end"}>
            <LoadingButton loading={loading} onClick={handleSubmit
            }>
                Submit
            </LoadingButton>
            <Button onClick={() => handleCancel ? handleCancel():null}>
                Cancel
            </Button>
        </Grid>
    </Grid>;

};