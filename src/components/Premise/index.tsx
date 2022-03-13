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

export default function PremiseOverview() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                />
                <CardMedia
                        component="img"
                        height="194"
                        image="data:image/jpeg;base64,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"
                        alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
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
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is absorbed,
                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                            mussels, tucking them down into the rice, and cook again without
                            stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
    );
}