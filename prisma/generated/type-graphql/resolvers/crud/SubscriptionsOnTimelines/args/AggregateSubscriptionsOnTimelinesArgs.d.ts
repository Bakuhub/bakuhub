import { SubscriptionsOnTimelinesOrderByWithRelationInput } from "../../../inputs/SubscriptionsOnTimelinesOrderByWithRelationInput";
import { SubscriptionsOnTimelinesWhereInput } from "../../../inputs/SubscriptionsOnTimelinesWhereInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../../../inputs/SubscriptionsOnTimelinesWhereUniqueInput";
export declare class AggregateSubscriptionsOnTimelinesArgs {
    where?: SubscriptionsOnTimelinesWhereInput | undefined;
    orderBy?: SubscriptionsOnTimelinesOrderByWithRelationInput[] | undefined;
    cursor?: SubscriptionsOnTimelinesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
