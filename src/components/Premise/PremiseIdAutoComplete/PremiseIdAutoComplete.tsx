import * as React from "react";
import {FunctionComponent, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {useQuery} from "@apollo/client";
import {premiseIdsQuery} from "@gql/query/premiseIdsQuery";
import {getPremiseIdsQueryVariables} from "@gql/utils/getPremiseIdsQueryVariables";
import {Vision} from "prisma/generated/type-graphql";
import LabelChip from "@components/Label";

export interface PremiseIdAutoCompleteProps {
    currentVisionId: string;
    value: Vision | null | undefined;
    handleChange: (nextVision: Vision | null) => void;
}

export const PremiseIdAutoComplete: FunctionComponent<PremiseIdAutoCompleteProps> = (
        {
            currentVisionId,
            value, handleChange
        }) => {
    const [keyword, setKeyword] = useState("");
    const {data, loading} = useQuery(
            premiseIdsQuery, getPremiseIdsQueryVariables({premiseIdKeyword: keyword})
    );
    const vision: Vision[] = data ? data.visions:[];

    return (
            <Autocomplete
                    id="country-select-demo"
                    sx={{width: 300}}
                    options={vision}
                    autoHighlight
                    inputValue={value?.title}
                    onInputChange={
                        (_, nextKeyword) => {
                            setKeyword(nextKeyword);
                        }
                    }
                    loading={loading}
                    onChange={
                        (_, nextKeyword) => {
                            handleChange(nextKeyword);
                        }
                    }
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option) => {
                        return (
                                <Box component="li"
                                     sx={{"& > img": {mr: 2, flexShrink: 0}}} {...props}>
                                    {option.title} {
                                        option.id === currentVisionId && <LabelChip
                                                      label={
                                                          {
                                                              name: "current",
                                                              color: "red"
                                                          }}/>
                                }
                                </Box>
                        );
                    }}
                    renderInput={(params) => (
                            <TextField
                                    {...params}
                                    label="Choose a premise"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: "new-password", // disable autocomplete and autofill
                                    }}
                            />
                    )}
            />
    );
};
