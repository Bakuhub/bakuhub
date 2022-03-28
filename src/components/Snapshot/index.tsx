import {Button, Grid, TextField} from "@mui/material";
import {useState} from "react";
import {getSnapshot} from "../../services/api/getSnapshot";
import {useMutation} from "@apollo/client";
import {createSnapshotMutation} from "../../gql/mutation/createSnapshotMutation";

export const Snapshot = () => {
    const [referenceUrl, setReferenceUrl] = useState("");
    const [createSnapshot] = useMutation(createSnapshotMutation);
    const handleClick = async () => {
        const snapshot = await getSnapshot({
            url: referenceUrl,
        });
        if (snapshot) {
            const result = await createSnapshot({
                variables: {
                    "data": {
                        "versionId": snapshot.versionId,
                        s3Url: snapshot.url,
                        "sourceUrl": referenceUrl,
                        "caption": ""
                    }
                }
            });
            console.info(result);
        } else {

        }
    };
    return <Grid>
        <TextField
                value={referenceUrl}
                onChange={(e) => setReferenceUrl(e.target.value)}
        />
        <Button variant={"outlined"} onClick={handleClick}>
            snapshot
        </Button>
    </Grid>;
};