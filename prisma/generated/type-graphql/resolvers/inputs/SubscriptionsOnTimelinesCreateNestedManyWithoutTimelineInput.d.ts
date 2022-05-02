import { SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope";
import { SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput";
import { SubscriptionsOnTimelinesCreateWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutTimelineInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";
export declare class SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput {
    create?: SubscriptionsOnTimelinesCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;
    createMany?: SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope | undefined;
    connect?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
}
