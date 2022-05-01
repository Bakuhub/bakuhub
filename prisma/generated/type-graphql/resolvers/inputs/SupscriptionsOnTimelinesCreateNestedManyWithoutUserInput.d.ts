import { SupscriptionsOnTimelinesCreateManyUserInputEnvelope } from "../inputs/SupscriptionsOnTimelinesCreateManyUserInputEnvelope";
import { SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput } from "../inputs/SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput";
import { SupscriptionsOnTimelinesCreateWithoutUserInput } from "../inputs/SupscriptionsOnTimelinesCreateWithoutUserInput";
import { SupscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SupscriptionsOnTimelinesWhereUniqueInput";
export declare class SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput {
    create?: SupscriptionsOnTimelinesCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: SupscriptionsOnTimelinesCreateManyUserInputEnvelope | undefined;
    connect?: SupscriptionsOnTimelinesWhereUniqueInput[] | undefined;
}
