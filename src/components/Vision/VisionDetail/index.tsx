import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {getVisionQueryArgs} from "../../../gql/helper/getVisionQueryArgs";
import {CircularProgress} from "@mui/material";
import {ErrorPage} from "../../Error";
import {DetailPage} from "../../Detail";
// use in page /vision/:visionId
export const VisionDetail = () => {
    const router = useRouter();
    const {visionId} = router.query;
    const {data, loading, error} = useQuery(...getVisionQueryArgs(visionId as string));
    if (loading) return <CircularProgress/>;
    if (error) return <ErrorPage/>;
    const {vision} = data;
    return (
            <DetailPage vision={vision}/>
    );
};