import {Grid, TextField} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {getVisionsByKeywordArgs} from "../../../gql/helper/getVisionsByKeywordArgs";
import {useLazyQuery, useMutation} from "@apollo/client";
import {Vision} from "../../../../prisma/generated/type-graphql";
import dynamic from "next/dynamic";
import TimelineContainer from "../index";
import {getVotesByIdArgs, VotesByIdQueryData} from "../../../gql/helper/getVotesByIdArgs";
import {ConnectType} from "../../../types";
import get from "lodash/get";
import {useSnackbar} from "notistack";
import {VersionSearchQueryData} from "../../../gql/query/versionSearchQuery";
import {VisionRow} from "../../Vision/VisionDataGrid";
import {createTimelineMutation} from "../../../gql/mutation/createTimelineMutation";
import {getCreateTimelineVariables} from "../../../gql/utils/getCreateTimelineVariables";
import {getUserIdBySession} from "../../../utils/getUserIdBySession";
import {useSession} from "next-auth/react";

const LoadingButton = dynamic(() => import("@mui/lab/LoadingButton"));
const VisionDataGrid = dynamic(() => import("../../Vision/VisionDataGrid"));

export const TimelineCreator = () => {
    const session = useSession();
    const {enqueueSnackbar} = useSnackbar();
    // search keyword
    const [keyword, setKeyword] = useState("");
    // title for the timeline
    const [title, setTitle] = useState("");
    // description for the timeline
    const [description, setDescription] = useState("");
    // fetch visions based on props
    const [totalCount, setTotalCount] = useState();
    const [loading, setLoading] = useState(false);
    const [take, setTake] = useState(1);
    const [skip, setSkip] = useState(0);

    const [createTimelineWithTitleAndDescription] = useMutation(createTimelineMutation);
    const [fetchVisions] = useLazyQuery<VersionSearchQueryData>(
            ...getVisionsByKeywordArgs({
                                           keyword,
                                           take, skip
                                       })
    );

    // visionDataGrid source
    const [visions, setVisions] = useState<VisionRow[]>([]);
    // used for rendering timeline
    const [timelineNodes, setTimelineNodes] = useState<Vision[]>([]);
    const [, {fetchMore: fetchMoreVote}] = useLazyQuery<VotesByIdQueryData>(...getVotesByIdArgs(
                                                                                    [],
                                                                                    ConnectType.VISION,
                                                                            )
    );

    const initVision = useCallback(async (isKeywordUpdated = false) => {
        if (skip > visions.length - 1 || isKeywordUpdated) {
            const {data: fetchVisionsData, error} = await fetchVisions();
            if (error) {
                enqueueSnackbar(error.message, {variant: "error"});
                return;
            }
            const totalCount = get(fetchVisionsData, "aggregateVision._count._all", 0);
            setTotalCount(totalCount);
            const visionsData: Vision[] = get(fetchVisionsData, "visions", []);
            const {data: fetchVotesData} = await fetchMoreVote(getVotesByIdArgs(
                                                                       visionsData.map(vision => vision.id),
                                                                       ConnectType.VISION
                                                               )[1]
            );
            const votesData = get(fetchVotesData, "groupByVotesOnVision", []);
            const newVisions: VisionRow[] = visionsData.map((vision: Vision) => {
                const selectedVote = votesData.find((vote) => vote.visionId === vision.id);
                const votes = get(selectedVote, "_sum.vote", 0);

                return {
                    ...vision,
                    inTimeline: timelineNodes.some(timelineVision => timelineVision.id ===
                                                                     vision.id),
                    votes
                };
            });
            setVisions(prev => isKeywordUpdated ? newVisions:[...prev, ...newVisions]);
        }
    }, [skip, visions.length, fetchVisions, fetchMoreVote, enqueueSnackbar, timelineNodes]);
    const createTimeline = async () => {
        const timeline = await createTimelineWithTitleAndDescription(getCreateTimelineVariables({
                                                                                                    title,
                                                                                                    description,
                                                                                                    premiseIds: timelineNodes.map(
                                                                                                            (vision: Vision) => vision.premiseId
                                                                                                    ),
                                                                                                    userId: getUserIdBySession(
                                                                                                            session)
                                                                                                }));
    };
    useEffect(
            () => {
                setLoading(true);
                initVision(true).finally(() => setLoading(false));
            }, [initVision, keyword]
    );
    useEffect(
            () => {
                setLoading(true);
                initVision().finally(() => setLoading(false));
            },
            [initVision, skip]
    );
    return (
            <Grid container alignItems={"flex-start"}>
                <Grid item container xs={8}>
                    <Grid item xs={12}>
                        <LoadingButton loading={loading}
                                       variant={"outlined"}
                                       onClick={() => {
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
                    <VisionDataGrid take={take}
                                    totalCount={totalCount}
                                    setSkip={(number: number) => {
                                        setSkip(number);
                                    }}
                                    handleUpdateVisionStatus={
                                        (visionId: string, nextStatus) => {
                                            const newTimelineNode = visions.find((vision: Vision) => vision.id ===
                                                                                                     visionId);
                                            setVisions(prev => prev.map(vision => vision.id ===
                                                                                  visionId ? {
                                                ...vision,
                                                inTimeline: nextStatus
                                            }:vision));

                                            if (newTimelineNode) {
                                                if (nextStatus) {
                                                    setTimelineNodes([
                                                                         ...timelineNodes,
                                                                         newTimelineNode
                                                                     ]);
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
