import { SubscriptionsOnTimelinesOrderByWithRelationInput } from "../../../inputs/SubscriptionsOnTimelinesOrderByWithRelationInput";
import { SubscriptionsOnTimelinesWhereInput } from "../../../inputs/SubscriptionsOnTimelinesWhereInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput";
export declare class TimelineSubscriptionsOnTimelinesArgs {
    where?: SubscriptionsOnTimelinesWhereInput | undefined;
    orderBy?: SubscriptionsOnTimelinesOrderByWithRelationInput[] | undefined;
    cursor?: SubscriptionsOnTimelinesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "timelineId" | "hasUnreadNotifications" | "lastReadAt" | "type" | "createdAt" | "updatedAt"> | undefined;
}
