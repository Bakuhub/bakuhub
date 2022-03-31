import {FunctionComponent, useState} from "react";
import {Avatar, Button, Collapse, Grid, TextField, Typography} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import ReportIcon from "@mui/icons-material/Report";
import ShareIcon from "@mui/icons-material/Share";
import {Thread} from "../../../../prisma/generated/type-graphql";
import {useSession} from "next-auth/react";
import {get} from "lodash";
import {fromNow} from "../../../utils/fromNow";
import {useDispatch} from "react-redux";
import {setConnector} from "../../../store/slices/threadSlice";
import {ThreadConnectType} from "../../../types";

interface ThreadDetailProps {
    thread: Thread;
    isChildThread?: boolean;
}

export const ThreadDetail: FunctionComponent<ThreadDetailProps> = ({thread, isChildThread}) => {
    const session = useSession();
    const [expanded, setExpanded] = useState(false);
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
    const dispatch = useDispatch();
    const author = getAuthor();
    return <Grid item container spacing={2} xs={12}>

        <Grid item>
            <Avatar src={author.image}/>
        </Grid>
        <Grid item>
            <Grid item alignItems={"center"} container>
                <Typography variant={"h4"}>
                    {author.name}
                </Typography>
                <Typography variant={"subtitle2"}>
                    posted {fromNow(thread.activityDate)}
                </Typography>
            </Grid>
            <Typography>
                {thread.title}
            </Typography>
            <Grid item container>
                <Button variant="outlined" startIcon={<ReplyIcon/>} onClick={() => {
                    setExpanded(!expanded);
                    dispatch(setConnector({
                        type: ThreadConnectType.VISION,
                        id: null
                    }));
                }}>
                    Reply
                </Button>
                <Button variant="outlined" endIcon={<ReportIcon/>}>
                    Report
                </Button>
                <Button variant="outlined" endIcon={<ShareIcon/>}>
                    Share
                </Button>
            </Grid>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Grid item container xs={12}>
                    <Grid item>
                        <Grid item container>
                            <Avatar style={{
                                marginRight: "10px"
                            }
                            } src={author.image} sx={{width: 24, height: 24}}
                            />
                            <TextField multiline variant={"standard"} autoFocus/>
                        </Grid>
                        <Grid item container justifyContent={"flex-end"}>
                            <Button>
                                Submit
                            </Button>
                            <Button onClick={() => setExpanded(false)}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Collapse>
            <Grid item container>
                {
                    (thread?.childThreads || []).map(
                            (childThread, index) => <ThreadDetail
                                    isChildThread
                                    key={index}
                                    thread={childThread}/>
                    )
                }
            </Grid>
        </Grid>


        {/*<Grid>*/}
        {/*    <Input/>*/}
        {/*    <Button variant={"contained"}>*/}
        {/*        Submit*/}
        {/*    </Button>*/}
        {/*</Grid>*/}
    </Grid>;
};
