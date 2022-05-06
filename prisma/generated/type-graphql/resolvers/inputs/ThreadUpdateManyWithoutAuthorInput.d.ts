import { ThreadCreateManyAuthorInputEnvelope } from "../inputs/ThreadCreateManyAuthorInputEnvelope";
import { ThreadCreateOrConnectWithoutAuthorInput } from "../inputs/ThreadCreateOrConnectWithoutAuthorInput";
import { ThreadCreateWithoutAuthorInput } from "../inputs/ThreadCreateWithoutAuthorInput";
import { ThreadScalarWhereInput } from "../inputs/ThreadScalarWhereInput";
import { ThreadUpdateManyWithWhereWithoutAuthorInput } from "../inputs/ThreadUpdateManyWithWhereWithoutAuthorInput";
import { ThreadUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/ThreadUpdateWithWhereUniqueWithoutAuthorInput";
import { ThreadUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/ThreadUpsertWithWhereUniqueWithoutAuthorInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadUpdateManyWithoutAuthorInput {
    create?: ThreadCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: ThreadUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: ThreadCreateManyAuthorInputEnvelope | undefined;
    set?: ThreadWhereUniqueInput[] | undefined;
    disconnect?: ThreadWhereUniqueInput[] | undefined;
    delete?: ThreadWhereUniqueInput[] | undefined;
    connect?: ThreadWhereUniqueInput[] | undefined;
    update?: ThreadUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: ThreadUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: ThreadScalarWhereInput[] | undefined;
}
