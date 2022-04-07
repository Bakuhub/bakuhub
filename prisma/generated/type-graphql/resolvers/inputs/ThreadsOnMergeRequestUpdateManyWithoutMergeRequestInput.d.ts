import { ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope } from "../inputs/ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope";
import { ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput";
import { ThreadsOnMergeRequestCreateWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutMergeRequestInput";
import { ThreadsOnMergeRequestScalarWhereInput } from "../inputs/ThreadsOnMergeRequestScalarWhereInput";
import { ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput";
import { ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput";
import { ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";
export declare class ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput {
    create?: ThreadsOnMergeRequestCreateWithoutMergeRequestInput[] | undefined;
    connectOrCreate?: ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput[] | undefined;
    upsert?: ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput[] | undefined;
    createMany?: ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope | undefined;
    set?: ThreadsOnMergeRequestWhereUniqueInput[] | undefined;
    disconnect?: ThreadsOnMergeRequestWhereUniqueInput[] | undefined;
    delete?: ThreadsOnMergeRequestWhereUniqueInput[] | undefined;
    connect?: ThreadsOnMergeRequestWhereUniqueInput[] | undefined;
    update?: ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput[] | undefined;
    updateMany?: ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput[] | undefined;
    deleteMany?: ThreadsOnMergeRequestScalarWhereInput[] | undefined;
}
