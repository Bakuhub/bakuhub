import { ThreadCreateManyParentThreadInputEnvelope } from "../inputs/ThreadCreateManyParentThreadInputEnvelope";
import { ThreadCreateOrConnectWithoutParentThreadInput } from "../inputs/ThreadCreateOrConnectWithoutParentThreadInput";
import { ThreadCreateWithoutParentThreadInput } from "../inputs/ThreadCreateWithoutParentThreadInput";
import { ThreadScalarWhereInput } from "../inputs/ThreadScalarWhereInput";
import { ThreadUpdateManyWithWhereWithoutParentThreadInput } from "../inputs/ThreadUpdateManyWithWhereWithoutParentThreadInput";
import { ThreadUpdateWithWhereUniqueWithoutParentThreadInput } from "../inputs/ThreadUpdateWithWhereUniqueWithoutParentThreadInput";
import { ThreadUpsertWithWhereUniqueWithoutParentThreadInput } from "../inputs/ThreadUpsertWithWhereUniqueWithoutParentThreadInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadUpdateManyWithoutParentThreadInput {
    create?: ThreadCreateWithoutParentThreadInput[] | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutParentThreadInput[] | undefined;
    upsert?: ThreadUpsertWithWhereUniqueWithoutParentThreadInput[] | undefined;
    createMany?: ThreadCreateManyParentThreadInputEnvelope | undefined;
    set?: ThreadWhereUniqueInput[] | undefined;
    disconnect?: ThreadWhereUniqueInput[] | undefined;
    delete?: ThreadWhereUniqueInput[] | undefined;
    connect?: ThreadWhereUniqueInput[] | undefined;
    update?: ThreadUpdateWithWhereUniqueWithoutParentThreadInput[] | undefined;
    updateMany?: ThreadUpdateManyWithWhereWithoutParentThreadInput[] | undefined;
    deleteMany?: ThreadScalarWhereInput[] | undefined;
}
