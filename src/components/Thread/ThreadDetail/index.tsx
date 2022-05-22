import {FunctionComponent, useState} from "react";
import {Avatar, Button, CircularProgress, Collapse, Grid, Icon, Typography} from "@mui/material";
import {Thread} from "../../../../prisma/generated/type-graphql";
import get from "lodash/get";
import {fromNow} from "../../../utils/fromNow";
import {ThreadConnectConfig} from "../../../store/slices/threadSlice";
import {Comment} from "../../Comment";
import {useMutation, useQuery} from "@apollo/client";
import {threadsQuery} from "../../../gql/query/threadsQuery";
import {getChildThreadsQueryVariable} from "../../../gql/utils/getChildThreadsQueryVariable";
import {ConnectType} from "../../../types";
import {
    upsertReactionOnThreadsMutation
} from "../../../gql/mutation/createReactionOnThreadsMutation";
import dynamic from "next/dynamic";
import {MaterialUIIcons} from "../../../constants/MaterialUIIcons";
import VotingButton from "../../Voting";

const ReactionButtons = dynamic(() => import("../../Reaction"));

interface ThreadDetailProps {
    thread: Thread;
    isChildThread?: boolean;
    connectConfig: ThreadConnectConfig;
}

export const ThreadDetail: FunctionComponent<ThreadDetailProps> = ({
                                                                       thread,
                                                                       isChildThread,
                                                                       connectConfig
                                                                   }) => {
    const [expanded, setExpanded] = useState(false);
    const {
        data, loading, refetch
    } = useQuery<{ threads: Thread[] }>(threadsQuery, getChildThreadsQueryVariable(thread.id));
    const childThreads = get(data, "threads", []);
    const [createReaction] = useMutation(upsertReactionOnThreadsMutation, {
        errorPolicy: "all",
    });
    const [createVote] = useMutation(upsertReactionOnThreadsMutation, {
        errorPolicy: "all",
    });
    const getAuthor = () => {
        if (thread.author) {
            return {
                name: get(thread, "author.name", get(thread, "author.email", "")),
                id: get(thread, "author.id", ""),
                image: get(thread, "author.image", "")
            };
        }
        return {
            name: "anonymous",
            id: "",
            image: "/images/anonymous.jpg"
        };
    };
    const author = getAuthor();
    return <Grid flexWrap={"nowrap"} item container spacing={2} xs={12}>
        <Grid item>
            <Avatar src={author.image}/>
        </Grid>
        <Grid item>
            <Grid item alignItems={"center"} container>
                <Typography variant={"h4"}>
                    {author.name}
                </Typography>
                <Typography variant={"subtitle2"}>
                    posted {fromNow(thread.createdAt)}
                </Typography>
            </Grid>
            <Typography>
                {thread.title}
            </Typography>
            <Grid item container>
                <Button variant="outlined" startIcon={
                    <Icon>
                        {MaterialUIIcons.reply}
                    </Icon>
                } onClick={() => {
                    setExpanded(!expanded);
                }}>
                    Reply
                </Button>

                <Button variant="outlined">
                    <Icon>
                        {MaterialUIIcons.report}
                    </Icon>
                </Button>
                <Grid item>
                    <VotingButton type={ConnectType.THREAD} id={thread.id}/>
                </Grid>
                <Button variant="outlined" endIcon={<Icon>
                    {MaterialUIIcons.share}
                </Icon>}>
                    Share
                </Button>
            </Grid>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Comment connectConfig={
                    {
                        ...connectConfig,
                        parentThreadId: thread.id
                    }
                }
                         handleSubmitCallback={refetch}
                         handleCancel={() => setExpanded(false)}/>
            </Collapse>
            <Grid item container>
                {
                    loading ? <CircularProgress/>:(
                            childThreads || []
                    ).map(
                            (childThread, index) => <ThreadDetail
                                    connectConfig={
                                        connectConfig
                                    }
                                    isChildThread
                                    key={index}
                                    thread={childThread}/>
                    )
                }
            </Grid>
        </Grid>
    </Grid>;
};
