import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {getSnapshot} from "../../services/api/getSnapshot";

export const Snapshot = () => {
    const [referenceUrl, setReferenceUrl] = useState("");
    return <Grid>
        <TextField
                value={referenceUrl}
                onChange={(e) => setReferenceUrl(e.target.value)}
        />
        <Button onClick={() => getSnapshot({
            url: referenceUrl,
            referenceType: "321321", title: "321333333333333333"
        })}>
            generate snapshot
        </Button>
        <Typography>

        </Typography>
    </Grid>;
};