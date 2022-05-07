import * as React from "react";
import {FunctionComponent, useEffect} from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {useQuery} from "@apollo/client";
import {tagQuery} from "../../../gql/query/tagQuery";
import {getTagByLabelVariables} from "../../../gql/utils/getTagByLabelVariables";
import get from "lodash/get";
import {Tag} from "../../../../prisma/generated/type-graphql";

export interface TagSearchBarProps {
    setTagLabels: (tag: string[]) => void;
}

export const TagSearchBar: FunctionComponent<TagSearchBarProps> = ({setTagLabels}) => {
    const [input, setInput] = React.useState("");
    const {data: tagOptionsData, refetch: refetchTags} = useQuery(tagQuery, getTagByLabelVariables(input));
    const tagOptions: Tag[] = get(tagOptionsData, "tags", []);
    useEffect(() => {
        if (input) {
            refetchTags();
        }
    }, [input]);
    useEffect(() => {
        console.log(tagOptionsData);
    }, [tagOptionsData]);
    return (
            <Autocomplete
                    multiple
                    onChange={(event, value) => {
                        setTagLabels(value);
                    }
                    }
                    id="tags-outlined"
                    options={tagOptions.map((option) => option.label)}
                    freeSolo
                    renderTags={(value: readonly string[], getTagProps) =>
                            value.map((option: string, index: number) => (
                                    <Chip
                                            color={"primary"}
                                            variant={"filled"}
                                            label={option} {...getTagProps({index})} />
                            ))
                    }
                    renderInput={(params) => {
                        return (
                                <TextField
                                        {...params}
                                        onChange={(event) => {
                                            setInput(event.target.value);
                                        }
                                        }
                                        variant="outlined"
                                        label="freeSolo"
                                        placeholder="Favorites"
                                />
                        );
                    }}
            />
    );
};

