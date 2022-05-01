import { SupscriptionsOnTimelinesCreateManyUserInputEnvelope } from "../inputs/SupscriptionsOnTimelinesCreateManyUserInputEnvelope";
import { SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput } from "../inputs/SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput";
import { SupscriptionsOnTimelinesCreateWithoutUserInput } from "../inputs/SupscriptionsOnTimelinesCreateWithoutUserInput";
import { SupscriptionsOnTimelinesScalarWhereInput } from "../inputs/SupscriptionsOnTimelinesScalarWhereInput";
import { SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput } from "../inputs/SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput";
import { SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput";
import { SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput";
import { SupscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SupscriptionsOnTimelinesWhereUniqueInput";
export declare class SupscriptionsOnTimelinesUpdateManyWithoutUserInput {
    create?: SupscriptionsOnTimelinesCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: SupscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: SupscriptionsOnTimelinesCreateManyUserInputEnvelope | undefined;
    set?: SupscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    disconnect?: SupscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    delete?: SupscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    connect?: SupscriptionsOnTimelinesWhereUniqueInput[] | undefined;
    update?: SupscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: SupscriptionsOnTimelinesScalarWhereInput[] | undefined;
}
