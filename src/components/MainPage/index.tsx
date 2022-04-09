import {CircularProgress, Grid} from "@mui/material";
import PremiseOverview from "../Premise/PremiseOverview";
import {useQuery} from "@apollo/client";
import {Premise} from "../../../prisma/generated/type-graphql";
import {premisesQuery} from "../../gql/query/premisesQuery";
import {getReactionByVisionsIdArgs} from "../../gql/helper/getReactionByVisionsIdArgs";
import {getActiveVisionFromPremise} from "../../utils/getActiveVisionFromPremise";
import {get} from "lodash";

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
    } = useQuery(...getReactionByVisionsIdArgs(get(data, "premises", []).map(premise => {
        const vision = getActiveVisionFromPremise(premise);
        return vision ? vision.id:"";
    })));
    return <Grid container spacing={1}>

        {
            (
                    loading
            ) ? <Grid>
                <CircularProgress/>
            </Grid>:data?.premises.map(
                    premise => <Grid key={premise.id} item xs={4} lg={3}
                    ><PremiseOverview premise={premise}/></Grid>
            )
        }
    </Grid>;
};