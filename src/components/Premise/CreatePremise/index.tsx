import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {FormEvent, useState} from "react";
import {ReferenceType} from "../../../constants/ReferenceType";
import {useRouter} from "next/router";

export const CreatePremise = () => {
    const router = useRouter();
    const [referenceType, setReferenceType] = useState("");
    const getReferenceInput = () => {
        switch (referenceType) {
            case ReferenceType.VIDEO:
            case ReferenceType.IMAGE:
                return <TextField fullWidth type={"file"}/>;
            default:
                return <TextField fullWidth label={"reference url"}/>;
        }

    };
    const createPremise = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.info("-0fe-w0f=-we0=-f0we=");
    };
    return <Grid component={"form"} onSubmit={createPremise} container spacing={1}>
        <Grid item xs={12}>
            <TextField required fullWidth label="Outlined" variant="outlined"/>
        </Grid>
        <Grid item xs={6}>
            <FormControl required fullWidth>
                <InputLabel>Reference Type</InputLabel>
                <Select
                        label={"Reference Type"}
                        variant={"outlined"}
                        value={referenceType}
                        onChange={(e) => {
                            console.info(e.target.value);
                            setReferenceType(e.target.value);
                        }}
                >
                    {
                        Object.values(ReferenceType).map(
                                value => <MenuItem key={value} value={value}>{value}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField fullWidth type={"datetime-local"}/>
        </Grid>
        <Grid item xs={12}>
            {getReferenceInput()}
        </Grid>
        <Grid item container xs={12}>
            <Button type={"submit"} variant={"contained"}>
                Create
            </Button>
            <Button variant={"outlined"} onClick={() => {
                console.info(router);
                router.back();
            }}>
                Cancel
            </Button>
        </Grid>
    </Grid>;
};