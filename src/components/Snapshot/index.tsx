import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";

export const Snapshot = () => {
    const [referenceUrl, setReferenceUrl] = useState("");
    return <Grid>
        <TextField
                value={referenceUrl}
                onChange={(e) => setReferenceUrl(e.target.value)}
        />
        <Button>
            generate snapshot
        </Button>
        <Typography>

        </Typography>
    </Grid>;
};