import { ThreadCreateOrConnectWithoutThreadsOnPremiseInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnPremiseInput";
import { ThreadCreateWithoutThreadsOnPremiseInput } from "../inputs/ThreadCreateWithoutThreadsOnPremiseInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadCreateNestedOneWithoutThreadsOnPremiseInput {
    create?: ThreadCreateWithoutThreadsOnPremiseInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnPremiseInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
}
