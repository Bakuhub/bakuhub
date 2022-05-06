import { ThreadsOnPremiseCreateManyPremiseInputEnvelope } from "../inputs/ThreadsOnPremiseCreateManyPremiseInputEnvelope";
import { ThreadsOnPremiseCreateOrConnectWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateOrConnectWithoutPremiseInput";
import { ThreadsOnPremiseCreateWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateWithoutPremiseInput";
import { ThreadsOnPremiseScalarWhereInput } from "../inputs/ThreadsOnPremiseScalarWhereInput";
import { ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput } from "../inputs/ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput";
import { ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput";
import { ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../inputs/ThreadsOnPremiseWhereUniqueInput";
export declare class ThreadsOnPremiseUpdateManyWithoutPremiseInput {
    create?: ThreadsOnPremiseCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: ThreadsOnPremiseCreateOrConnectWithoutPremiseInput[] | undefined;
    upsert?: ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;
    createMany?: ThreadsOnPremiseCreateManyPremiseInputEnvelope | undefined;
    set?: ThreadsOnPremiseWhereUniqueInput[] | undefined;
    disconnect?: ThreadsOnPremiseWhereUniqueInput[] | undefined;
    delete?: ThreadsOnPremiseWhereUniqueInput[] | undefined;
    connect?: ThreadsOnPremiseWhereUniqueInput[] | undefined;
    update?: ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;
    updateMany?: ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput[] | undefined;
    deleteMany?: ThreadsOnPremiseScalarWhereInput[] | undefined;
}
