import {FunctionComponent} from "react";
import {useRouter} from "next/router";
import {Grid, Typography} from "@mui/material";

interface NoSearchResultProps {
}

export const NoSearchResult: FunctionComponent<NoSearchResultProps> = ({}) => {
    const router = useRouter();
    console.info(router.query);
    const getKeyword = () => Object.entries(router.query).map(
            ([key, value]) => `${key}: ${value}`
    ).join(" and ");
    return <Grid item container alignItems={"center"} justifyContent={"center"}>
        <Typography variant={"h2"} noWrap>No results for</Typography>
        <Typography noWrap
                    variant={"h3"}>{`"${getKeyword()}"`}</Typography>
    </Grid>;
};