import {FunctionComponent} from "react";
import {Avatar, Button, Grid, Typography} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import ReportIcon from "@mui/icons-material/Report";
import ShareIcon from "@mui/icons-material/Share";
import {Thread} from "../../../../prisma/generated/type-graphql";
import {useSession} from "next-auth/react";
import {get} from "lodash";

interface ThreadDetailProps {
    thread: Thread;
    isChildThread?: boolean;
}

export const ThreadDetail: FunctionComponent<ThreadDetailProps> = ({thread, isChildThread}) => {
    const session = useSession();
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
    return <Grid style={
        {
            paddingLeft: isChildThread ? "20px":"0px"
        }
    }>
        <Grid item container>
            <Grid>
                <Avatar src={author.image}/>
            </Grid>
            <Grid>
                <Grid item container>
                    <Typography>
                        {author.name}
                    </Typography>
                    <Typography>
                        {thread.createdAt}
                    </Typography>
                </Grid>
                <Typography>
                    {thread.title}
                </Typography>
            </Grid>
        </Grid>
        <Grid>
            <Button variant="outlined" startIcon={<ReplyIcon/>}>
                Reply
            </Button>
            <Button variant="outlined" endIcon={<ReportIcon/>}>
                Report
            </Button>
            <Button variant="outlined" endIcon={<ShareIcon/>}>
                Share
            </Button>
        </Grid>
        <Grid>
            {
                (thread?.childThreads || []).map(
                        (childThread) => <ThreadDetail
                                isChildThread
                                key={childThread.id}
                                thread={childThread}/>
                )
            }
        </Grid>
        {/*<Grid>*/}
        {/*    <Input/>*/}
        {/*    <Button variant={"contained"}>*/}
        {/*        Submit*/}
        {/*    </Button>*/}
        {/*</Grid>*/}
    </Grid>;
};
