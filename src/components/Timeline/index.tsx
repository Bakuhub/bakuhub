import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Typography from "@mui/material/Typography";
import {Tooltip} from "@mui/material";

export default function CustomizedTimeline() {
    return (
            <Timeline position="alternate">
                {new Array(5).fill(1).map((g, index) => <TimelineItem key={index}>

                    <TimelineOppositeContent
                            sx={{m: "auto 0"}}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                    >
                        <Tooltip title={"fdsfsd"}>
                            <Typography>
                                9:30 am
                            </Typography>
                        </Tooltip>

                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <FastfoodIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: "12px", px: 2}}>
                        <Typography variant="h6" component="span">
                            Eat
                        </Typography>
                        <Typography>Because you need strength</Typography>
                    </TimelineContent>
                </TimelineItem>)}
            </Timeline>
    );
}