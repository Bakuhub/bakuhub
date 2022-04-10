import {Grid, TextField} from "@mui/material";
import {useState} from "react";
import {getVisionsByKeywordArgs} from "../../../gql/helper/getVisionsByKeywordArgs";
import {useQuery} from "@apollo/client";
import {Vision} from "../../../../prisma/generated/type-graphql";
import {TimelineContainer} from "../index";
import {VisionDataGrid} from "../../Vision/VisionDataGrid";
import {LoadingButton} from "@mui/lab";

export const TimelineCreator = () => {
    const [keyword, setKeyword] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {data, loading, error, refetch} = useQuery(
            ...getVisionsByKeywordArgs(keyword)
    );
    const [timelineNodes, setTimelineNodes] = useState<Vision[]>([]);
    const visions = data?.visions.map((vision: Vision) => (
            {
                ...vision,
                inTimeline: timelineNodes.some(timelineVision => timelineVision.id === vision.id)
            }
    ));
    return (
            <Grid container alignItems={"flex-start"}>

                <Grid item container xs={8}>
                    <Grid item xs={12}>
                        <LoadingButton loading={loading}
                                       variant={"outlined"}
                                       onClick={() => {
                                           refetch();
                                       }}>
                            Search
                        </LoadingButton>
                        <LoadingButton>
                            Create Timeline
                        </LoadingButton>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth={true} label={"title"} value={title}
                                   onChange={e => setTitle(e.target.value)}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth={true} label={"description"} value={description}
                                   onChange={e => setDescription(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                                fullWidth
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                label="Search"
                                variant="outlined"
                        />

                    </Grid>
                    <VisionDataGrid handleUpdateVisionStatus={
                        (visionId: string, nextStatus) => {

                            const newTimelineNode = visions.find((vision: Vision) => vision.id === visionId);
                            if (newTimelineNode) {
                                if (nextStatus) {
                                    setTimelineNodes([...timelineNodes, newTimelineNode]);
                                } else {
                                    setTimelineNodes(timelineNodes.filter((timelineNode: Vision) => timelineNode.id !==
                                                                                                    visionId));
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
                            if (vision.activityDate) {
                                return new Date(vision.activityDate).toLocaleDateString();
                            } else {
                                return "invariant";
                            }
                        }}
                        visions={timelineNodes}/>
                </Grid>
            </Grid>
    );
};