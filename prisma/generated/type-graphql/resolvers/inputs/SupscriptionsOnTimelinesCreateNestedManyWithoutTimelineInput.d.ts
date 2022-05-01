import { SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope";
import { SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput";
import { SupscriptionsOnTimelinesCreateWithoutTimelineInput } from "../inputs/SupscriptionsOnTimelinesCreateWithoutTimelineInput";
import { SupscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SupscriptionsOnTimelinesWhereUniqueInput";
export declare class SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput {
    create?: SupscriptionsOnTimelinesCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: SupscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;
    createMany?: SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope | undefined;
    connect?: SupscriptionsOnTimelinesWhereUniqueInput[] | undefined;
}
