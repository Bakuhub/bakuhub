import {TextField} from "@mui/material";
import {useState} from "react";
import {LoadingButton} from "@mui/lab";
import {getVisionsByKeywordArgs} from "../../../gql/helper/getVisionsByKeywordArgs";
import {useQuery} from "@apollo/client";

export const TimelineCreator = () => {
    const [keyword, setKeyword] = useState("");
    const [description, setDescription] = useState("");
    const {data, loading, error, refetch} = useQuery(
            ...getVisionsByKeywordArgs(keyword)
    );
    console.info(data);
    return (
            <div>
                <h1>TimelineCreator</h1>
                <TextField
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        label="Search"
                        variant="outlined"
                />
                <LoadingButton loading={loading} onClick={() => {
                    refetch();
                }}>
                    Search
                </LoadingButton>
            </div>
    );
};