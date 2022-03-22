import * as React from "react";
import {styled} from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {red} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Premise} from "../../../../prisma/generated/type-graphql";
import {get} from "lodash";
import {useRouter} from "next/router";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? "rotate(0deg)":"rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));


function PremiseOverview({premise}: { premise: Premise }) {
    const router = useRouter();
    const [expanded, setExpanded] = React.useState(false);
    console.info(premise);
    console.info(get(premise, "vision[0].reference", ""));
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    if (!premise) return <div>ff</div>;
    return (
            <>
                <Card sx={{maxWidth: 345}}>
                    <CardHeader
                            avatar={
                                <Avatar
                                        onClick={() => {
                                            console.info("-30-2103=-012=-");
                                            router.push(`/premises/${premise.id}`);
                                        }}
                                        sx={{bgcolor: red[500]}} aria-label="recipe">
                                    {get(premise, "author.name[0]", "")}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon/>
                                </IconButton>
                            }
                            title={premise.title}
                            subheader={get(premise, "vision[0].activityDate", "").toString()}
                    />
                    <CardMedia
                            component="img"
                            height="194"
                            image={get(premise, "vision[0].reference", "")}
                            alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {get(premise, "vision[0].description", "")}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                        <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                {get(premise, "vision[0].description", "")}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </>
    );
}


export default PremiseOverview;