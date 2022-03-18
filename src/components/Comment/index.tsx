import {Button, Grid, TextField} from "@mui/material";
import {useState} from "react";

export const CreateComment = () => {
    const [comment, setComment] = useState("");
    const handleSubmit = async () => {
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