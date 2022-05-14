import {useSession} from "next-auth/react";
import {getUserIdBySession} from "../../../utils/getUserIdBySession";
import {FunctionComponent} from "react";
import {useQuery} from "@apollo/client";
import {visionViewsHistoriesQuery} from "@gql/query/visionViewsHistoriesQuery";
import {getVisionViewsHistoriesVariables} from "@gql/utils/getVisionViewsHistoriesVariables";
import {VisionViewsHistory} from "../../../../prisma/generated/type-graphql";
import {Typography} from "@mui/material";
import Link from "next/link";

export const VisionViewsHistoryPage: FunctionComponent = (props) => {
    console.info(props);
    const session = useSession();
    const userId = getUserIdBySession(session);
    const {data} = useQuery(visionViewsHistoriesQuery, getVisionViewsHistoriesVariables(userId));
    const visionViewsHistories: VisionViewsHistory[] = data?.visionViewsHistories || [];

    return <div>
        {
            visionViewsHistories.map(
                    (visionViewsHistory: VisionViewsHistory) =>
                            <Link key={visionViewsHistory.id} passHref href={`/vision/${visionViewsHistory.visionId}`}>
                                <Typography>
                                    {visionViewsHistory.visionId}
                                </Typography>
                            </Link>
            )
        }

        user history

    </div>;
};

export default VisionViewsHistoryPage;