import * as React from "react";
import {FunctionComponent} from "react";
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
import {Vision} from "../../../prisma/generated/type-graphql";

export interface TimelineContainerProps {
    visions: Vision[];
    getTitle: (vision: Vision) => string;
    getDescription: (vision: Vision) => string;
    getDate: (vision: Vision) => string;
}

export const TimelineContainer: FunctionComponent<TimelineContainerProps> = ({
                                                                                 visions,
                                                                                 getTitle,
                                                                                 getDescription,
                                                                                 getDate,
                                                                             }) => {
    return (
            <Timeline position="alternate">
                {visions.map((vision) => <TimelineItem key={vision.id}>
                    <TimelineOppositeContent
                            sx={{m: "auto 0"}}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                    >
                        <Tooltip title={"activity date"}>
                            <Typography>
                                {getDate(vision)}
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
                            {getTitle(vision)}
                        </Typography>
                        <Typography>{getDescription(vision)}</Typography>
                    </TimelineContent>
                </TimelineItem>)}
            </Timeline>
    );
};