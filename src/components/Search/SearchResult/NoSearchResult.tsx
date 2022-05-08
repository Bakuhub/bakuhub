import {FunctionComponent} from "react";
import {useRouter} from "next/router";
import get from "lodash/get";
import {Grid, Typography} from "@mui/material";

interface NoSearchResultProps {
}

export const NoSearchResult: FunctionComponent<NoSearchResultProps> = ({}) => {
    const router = useRouter();
    console.info(router.query);
    const getKeyword = () => {
        return get(router, "query.keyword", "");
    };
    return <Grid item container alignItems={"center"} justifyContent={"center"}>
        <Typography variant={"h2"} noWrap>No results for</Typography>
        <Typography noWrap
                    variant={"h3"}>{`"${getKeyword()}"`}</Typography>
    </Grid>;
};