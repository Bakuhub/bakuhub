import {Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {LoadingButton} from "@mui/lab";
import {getVisionsByKeywordArgs} from "../../../gql/helper/getVisionsByKeywordArgs";
import {useQuery} from "@apollo/client";
import {TimelineContainer} from "../index";
import {VisionDetail} from "../../Vision/VisionOverview/VisionDetail";
import {Vision} from "../../../../prisma/generated/type-graphql";

export const TimelineCreator = () => {
    const [keyword, setKeyword] = useState("");
    const [description, setDescription] = useState("");
    const {data, loading, error, refetch} = useQuery(
            ...getVisionsByKeywordArgs(keyword)
    );
    console.info(data);
    return (
            <Grid container justifyContent={"center"}>
                <Typography variant={"h1"}>TimelineCreator</Typography>
                <Grid item xs={11}>
                    <TextField
                            fullWidth
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            label="Search"
                            variant="outlined"
                    />
                </Grid>
                <LoadingButton loading={loading}
                               variant={"outlined"}
                               onClick={() => {
                                   refetch();
                               }}>
                    Search
                </LoadingButton>
                <Grid item container xs={8} alignContent={"center"}>
                    {data && data.visions.map(
                            (vision: Vision) => <VisionDetail key={vision.id} vision={vision}/>
                    )}
                </Grid>
                {data && <Grid item container xs={4}><TimelineContainer
                    getTitle={
                        (vision) => {
                            return `${vision.title}`;
                        }
                    }
                    getDescription={
                        (vision) => {
                            return `${vision.description}`;
                        }
                    }
                    getDate={(vision) => {
                        if (vision.activityDate)
                            return new Date(vision.activityDate).toLocaleDateString();
                        else
                            return "invariant";
                    }}
                    visions={data.visions || []}/>
                </Grid>}
            </Grid>
    );
};