import {Button, CircularProgress, Grid, TextField} from "@mui/material";
import {useState} from "react";
import {getSnapshot} from "../../services/api/getSnapshot";
import {useMutation} from "@apollo/client";
import {createSnapshotMutation} from "../../gql/mutation/createSnapshotMutation";
import {useDispatch} from "react-redux";
import {get} from "lodash";
import {useSnackbar} from "notistack";

export const Snapshot = () => {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const dispatch = useDispatch();
    const [referenceUrl, setReferenceUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [createSnapshot] = useMutation(createSnapshotMutation);
    const handleClick = async () => {
        setIsLoading(true);
        const res = await getSnapshot({
            url: referenceUrl,
        });
        console.info(res);
        if (res && res.url) {
            const result = await createSnapshot({
                variables: {
                    "data": {
                        "versionId": res.versionId,
                        s3Url: res.url,
                        "sourceUrl": referenceUrl,
                        "caption": ""
                    }
                }
            });
            enqueueSnackbar("snapshot is granted", {
                variant: "success",
            });
        } else {

            const errorMsg = get(res, "errorMessage.message", "something went wrong, the snapshot can't be granted"
            );
            enqueueSnackbar(errorMsg, {
                variant: "error",
            });

        }
        setIsLoading(false);
    };
    return <Grid alignContent={"center"} container>
        <TextField
                value={referenceUrl}
                onChange={(e) => setReferenceUrl(e.target.value)}
        />
        <Button variant={"outlined"} onClick={handleClick}>
            {isLoading ? <CircularProgress/>:"snapshot"}
        </Button>
    </Grid>;
};