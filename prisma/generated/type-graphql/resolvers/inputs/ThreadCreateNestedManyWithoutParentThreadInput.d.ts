import { ThreadCreateManyParentThreadInputEnvelope } from "../inputs/ThreadCreateManyParentThreadInputEnvelope";
import { ThreadCreateOrConnectWithoutParentThreadInput } from "../inputs/ThreadCreateOrConnectWithoutParentThreadInput";
import { ThreadCreateWithoutParentThreadInput } from "../inputs/ThreadCreateWithoutParentThreadInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadCreateNestedManyWithoutParentThreadInput {
    create?: ThreadCreateWithoutParentThreadInput[] | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutParentThreadInput[] | undefined;
    createMany?: ThreadCreateManyParentThreadInputEnvelope | undefined;
    connect?: ThreadWhereUniqueInput[] | undefined;
}
