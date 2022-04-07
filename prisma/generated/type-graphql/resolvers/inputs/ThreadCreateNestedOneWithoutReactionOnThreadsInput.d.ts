import { ThreadCreateOrConnectWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateOrConnectWithoutReactionOnThreadsInput";
import { ThreadCreateWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateWithoutReactionOnThreadsInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadCreateNestedOneWithoutReactionOnThreadsInput {
    create?: ThreadCreateWithoutReactionOnThreadsInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutReactionOnThreadsInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
}
