import {Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {LoadingButton} from "@mui/lab";
import {getVisionsByKeywordArgs} from "../../../gql/helper/getVisionsByKeywordArgs";
import {useQuery} from "@apollo/client";
import {Vision} from "../../../../prisma/generated/type-graphql";
import {TimelineContainer} from "../index";
import {VisionDataGrid} from "../../Vision/VisionDataGrid";

export const TimelineCreator = () => {
    const [keyword, setKeyword] = useState("");
    const [description, setDescription] = useState("");
    const {data, loading, error, refetch} = useQuery(
            ...getVisionsByKeywordArgs(keyword)
    );
    const [timelineNodes, setTimelineNodes] = useState<Vision[]>([]);
    const visions = data?.visions.map((vision: Vision) => ({
        ...vision,
        inTimeline: timelineNodes.some(timelineVision => timelineVision.id===vision.id)
    }));
    return (
            <Grid container>
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
                <Grid item xs={8}>
                    <VisionDataGrid handleUpdateVisionStatus={
                        (visionId: string, nextStatus) => {

                            const newTimelineNode = visions.find((vision: Vision) => vision.id===visionId);
                            if (newTimelineNode) {
                                if (nextStatus) {
                                    setTimelineNodes([...timelineNodes, newTimelineNode]);
                                } else {
                                    setTimelineNodes(timelineNodes.filter((timelineNode: Vision) => timelineNode.id!==visionId));
                                }
                            }
                        }
                    } loading={loading} visions={visions || []}/>
                </Grid>
                <Grid item container xs={4}><TimelineContainer
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
                        visions={timelineNodes}/>
                </Grid>
            </Grid>
    );
};