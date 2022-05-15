import {useSession} from "next-auth/react";
import {getUserIdBySession} from "../../../utils/getUserIdBySession";
import {FunctionComponent} from "react";
import {useQuery} from "@apollo/client";
import {visionViewsHistoriesQuery} from "@gql/query/visionViewsHistoriesQuery";
import {getVisionViewsHistoriesVariables} from "@gql/utils/getVisionViewsHistoriesVariables";
import {VisionViewsHistory} from "prisma/generated/type-graphql";
import {Grid} from "@mui/material";
import dynamic from "next/dynamic";

const VisionViewsHistoryItem = dynamic(() => import("../VisionViewsHistoryItem"));

export const VisionViewsHistoryPage: FunctionComponent = (props) => {
    console.info(props);
    const session = useSession();
    const userId = getUserIdBySession(session);
    const {data} = useQuery(visionViewsHistoriesQuery, getVisionViewsHistoriesVariables(userId));
    const visionViewsHistories: VisionViewsHistory[] = data?.visionViewsHistories || [];
    console.info(data);
    return <div>
        {
            visionViewsHistories.map(
                    (visionViewsHistory: VisionViewsHistory) =>

                            visionViewsHistory.vision ? <Grid item key={visionViewsHistory.id}>
                                <VisionViewsHistoryItem
                                        visionViewsHistory={visionViewsHistory}/>
                            </Grid>:null
            )
        }

        user history

    </div>;
};

export default VisionViewsHistoryPage;