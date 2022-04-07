import { ThreadCreateOrConnectWithoutChildThreadsInput } from "../inputs/ThreadCreateOrConnectWithoutChildThreadsInput";
import { ThreadCreateWithoutChildThreadsInput } from "../inputs/ThreadCreateWithoutChildThreadsInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadCreateNestedOneWithoutChildThreadsInput {
    create?: ThreadCreateWithoutChildThreadsInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutChildThreadsInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
}
