import { SubscriptionsOnTimelinesOrderByWithRelationInput } from "../../../inputs/SubscriptionsOnTimelinesOrderByWithRelationInput";
import { SubscriptionsOnTimelinesWhereInput } from "../../../inputs/SubscriptionsOnTimelinesWhereInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput";
export declare class FindManySubscriptionsOnTimelinesArgs {
    where?: SubscriptionsOnTimelinesWhereInput | undefined;
    orderBy?: SubscriptionsOnTimelinesOrderByWithRelationInput[] | undefined;
    cursor?: SubscriptionsOnTimelinesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "timelineId" | "lastReadAt" | "type" | "createdAt" | "updatedAt"> | undefined;
}
