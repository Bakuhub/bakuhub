import {Vision} from "prisma/generated/type-graphql";
import * as React from "react";
import {FunctionComponent} from "react";
import Link from "next/link";
import {Avatar, Button, Grid, Icon, IconButton, ListItem, ListItemAvatar, ListItemText, Tooltip} from "@mui/material";
import get from "lodash/get";
import Typography from "@mui/material/Typography";
import moment from "moment";
import * as  Diff from "diff";
import {MaterialUIIcons} from "@constants/MaterialUIIcons";

interface MergedVisionListItemProps {
    vision: Vision;
}

export const MergedVisionListItem: FunctionComponent<MergedVisionListItemProps> = ({vision}) => {
    const result = Diff.diffChars(
            "fjfsdaiof fsdijofisda ijfsdaoifjsad", "fjfof fsofisda ijfjsadfffffffffff",
    );
    console.info(result);
    const getColor = ({added, removed}: { added?: boolean, removed?: boolean }) => {
        switch (true) {
            case added:
                return "red";
            case removed:
                return "green";
            default:
                return "white";
        }
    };
    return <Grid key={vision.id} item container xs={12}>

        <Link passHref href={`/visions/${vision.id}`}>
            <Button>
                {vision.id}
            </Button>
        </Link>
        {
            result.map(
                    (
                            {added, removed, value}, index
                    ) => <Typography key={index} color={getColor({added, removed})}>{value}</Typography>
            )
        }
        <Tooltip title={new Date(get(vision, "updatedAt")).toDateString() || ""}>
            <Typography>
                {moment(vision.updatedAt).fromNow()}
            </Typography>
        </Tooltip>
        <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <Icon>{MaterialUIIcons.delete}</Icon>
                    </IconButton>
                }
        >
            <ListItemAvatar>
                <Avatar>
                    <Icon>{MaterialUIIcons.folder}</Icon>
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                    primary="Single-line item"
                    secondary={"Secondary text"}
            />
        </ListItem>
    </Grid>;
};