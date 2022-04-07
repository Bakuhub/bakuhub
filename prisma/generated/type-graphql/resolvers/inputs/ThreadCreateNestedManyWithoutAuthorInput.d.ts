import { ThreadCreateManyAuthorInputEnvelope } from "../inputs/ThreadCreateManyAuthorInputEnvelope";
import { ThreadCreateOrConnectWithoutAuthorInput } from "../inputs/ThreadCreateOrConnectWithoutAuthorInput";
import { ThreadCreateWithoutAuthorInput } from "../inputs/ThreadCreateWithoutAuthorInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadCreateNestedManyWithoutAuthorInput {
    create?: ThreadCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: ThreadCreateManyAuthorInputEnvelope | undefined;
    connect?: ThreadWhereUniqueInput[] | undefined;
}
