import {Grid, LinearProgress} from "@mui/material";
import {ThreadDetail} from "../ThreadDetail";
import React, {FunctionComponent} from "react";
import {Thread} from "../../../../prisma/generated/type-graphql";
import {ThreadConnectConfig} from "../../../store/slices/threadSlice";

export interface ThreadContainerProps {
    threads?: Thread[];
    connectConfig: ThreadConnectConfig;
}

const ThreadContainer: FunctionComponent<ThreadContainerProps> = ({threads, connectConfig}) => {
    return (
            <Grid item container xs={12}>
                {
                    threads ? threads.map((thread, index) =>
                                                  <ThreadDetail
                                                          key={thread.id ? thread.id:index}
                                                          thread={thread}
                                                          connectConfig={connectConfig}
                                                  />):
                    <LinearProgress/>
                }
            </Grid>
    );
};

export default ThreadContainer;