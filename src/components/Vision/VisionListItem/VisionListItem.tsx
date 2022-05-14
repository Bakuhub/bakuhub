import {Card, CardContent, Grid, Typography} from "@mui/material";
import {Vision} from "prisma/generated/type-graphql";
import * as React from "react";
import {FunctionComponent} from "react";
import CardMedia from "@mui/material/CardMedia";
import {getThumbnail} from "../../../utils/getThumbnail";

interface VisionListItemProps {
    vision: Vision;
}

export const VisionListItem: FunctionComponent<VisionListItemProps> = ({vision}) => {
    const thumbnail = getThumbnail(vision);

    return <Card sx={{display: "flex"}}>
        <Grid container>
            <Grid item xs={1}>
                <CardMedia
                        component="img"
                        image={thumbnail}
                        alt="Premise Preview"
                />
            </Grid>
            <CardContent sx={{flex: "1 0 auto"}}>

                <Typography>
                    {vision.title}
                </Typography>
                <Typography noWrap>
                    {vision.description}
                </Typography>
            </CardContent>

        </Grid>
    </Card>;
};