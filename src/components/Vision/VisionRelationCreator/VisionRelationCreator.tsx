import {FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import {useQuery} from "@apollo/client";
import {visionsOverviewQuery} from "@gql/query/visionsOverviewQuery";

export interface VisionRelationCreatorProps {}


export const VisionRelationCreator = () => {
    const [targetVisionIds, setTargetVisionIds] = useState([]);
    const sourceVisionId = "";
    const [] = useQuery(visionsOverviewQuery, getVisions);
    return <Grid>
        <FormControl required sx={{m: 1, minWidth: 120}}>
            <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
            <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    label="Age *"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
        </FormControl>
    </Grid>;

};