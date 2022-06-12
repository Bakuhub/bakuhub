import {Autocomplete} from "@mui/material";
import {useQuery} from "@apollo/client";
import {
    getSearchActiveVisionByKeywordVariable
} from "@gql/utils/getSearchActiveVisionByKeywordVariable";
import {versionSearchQuery} from "@gql/query/versionSearchQuery";
import * as React from "react";
import {useState} from "react";
import TextField from "@mui/material/TextField";

export const PremiseAutoComplete = () => {
    const [keyword, setKeyword] = useState("");
    const [premise, setPremise] = useState();
    const {data} = useQuery(
            versionSearchQuery,
            getSearchActiveVisionByKeywordVariable({
                                                       keyword, skip: 0, take: 20
                                                   })
    );

    return <Autocomplete

            value={premise}
            onChange={(event, newValue) => {
                //   setPremise(newValue);
            }}
            inputValue={keyword}
            options={[]}

            renderInput={(params) => (
                    <TextField
                            {...params}
                            onChange={(event) => {
                                setKeyword(event.target.value);
                            }}
                            variant="outlined"
                            label="Tags"
                            placeholder="tags that best describe project"
                    />
            )
            }
    />;
};