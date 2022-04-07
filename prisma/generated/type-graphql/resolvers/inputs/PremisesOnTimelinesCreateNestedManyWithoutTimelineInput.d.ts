import { PremisesOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/PremisesOnTimelinesCreateManyTimelineInputEnvelope";
import { PremisesOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateOrConnectWithoutTimelineInput";
import { PremisesOnTimelinesCreateWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateWithoutTimelineInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../inputs/PremisesOnTimelinesWhereUniqueInput";
export declare class PremisesOnTimelinesCreateNestedManyWithoutTimelineInput {
    create?: PremisesOnTimelinesCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: PremisesOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;
    createMany?: PremisesOnTimelinesCreateManyTimelineInputEnvelope | undefined;
    connect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
}
