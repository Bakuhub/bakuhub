import {Grid} from "@mui/material";
import {useQuery} from "@apollo/client";
import {Premise} from "../../../prisma/generated/type-graphql";
import {premisesQuery} from "../../gql/query/premisesQuery";
import dynamic from "next/dynamic";
import MediaSkeleton from "../Skeleton/MediaSkeleton";

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
    return <Grid container spacing={1}>
        {
            (
                    loading
            ) ? new Array(15).fill(1).map((_, index) => <Grid xs={3} md={2.4} item key={index}><MediaSkeleton/></Grid>)
              :data?.premises.map(
                      premise => <Grid key={premise.id} item
                      ><PremiseOverview premise={premise}/></Grid>
              )
        }
    </Grid>;
};