import { ThreadCreateOrConnectWithoutThreadsOnVisionInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnVisionInput";
import { ThreadCreateWithoutThreadsOnVisionInput } from "../inputs/ThreadCreateWithoutThreadsOnVisionInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadCreateNestedOneWithoutThreadsOnVisionInput {
    create?: ThreadCreateWithoutThreadsOnVisionInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnVisionInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
}
