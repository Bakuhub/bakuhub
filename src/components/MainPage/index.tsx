import {CircularProgress, Grid} from "@mui/material";
import {useQuery} from "@apollo/client";
import {Premise} from "../../../prisma/generated/type-graphql";
import {premisesQuery} from "../../gql/query/premisesQuery";
import {getReactionByIdArgs} from "../../gql/helper/getReactionByIdArgs";
import {getActiveVisionFromPremise} from "../../utils/getActiveVisionFromPremise";
import get from "lodash/get";
import {ConnectType} from "../../types";
import dynamic from "next/dynamic";

const PremiseOverview = dynamic(() => import("../Premise/PremiseOverview"));
export const MainPage = () => {
    const {loading, error, data} = useQuery<{ premises: Premise[] }>(premisesQuery, {
        variables: {
            "where": {
                "OR": [
                    {
                        "draftMode": {
                            "equals": false
                        },
                        "AND": [
                            {
                                "nextVisions": {
                                    "every": {
                                        "draftMode": {
                                            "equals": true
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    });
    const {
        data: reactionByVisionsId
    } = useQuery(...getReactionByIdArgs(get(data, "premises", []).map(premise => {
        const vision = getActiveVisionFromPremise(premise);
        return vision ? vision.id:"";
    }), ConnectType.VISION));
    console.info(reactionByVisionsId);
    console.info("------------------------------");
    return <Grid container spacing={1}>

        {
            (
                    loading
            ) ? <Grid>
                <CircularProgress/>
            </Grid>:data?.premises.map(
                    premise => <Grid key={premise.id} item
                    ><PremiseOverview premise={premise}/></Grid>
            )
        }
    </Grid>;
};