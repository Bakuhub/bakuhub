import {getTimelineQueryArgs} from "../../../gql/utils/getTimelineQueryArgs";
import {useQuery} from "@apollo/client";

export const TimelineDetail = (timelineId: string) => {

    const {data, loading, error} = useQuery(...getTimelineQueryArgs(timelineId));
    return <div>TimelineDetail</div>;
};