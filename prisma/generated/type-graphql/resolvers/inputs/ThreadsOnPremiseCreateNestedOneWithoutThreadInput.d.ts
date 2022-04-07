import { ThreadsOnPremiseCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnPremiseCreateOrConnectWithoutThreadInput";
import { ThreadsOnPremiseCreateWithoutThreadInput } from "../inputs/ThreadsOnPremiseCreateWithoutThreadInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../inputs/ThreadsOnPremiseWhereUniqueInput";
export declare class ThreadsOnPremiseCreateNestedOneWithoutThreadInput {
    create?: ThreadsOnPremiseCreateWithoutThreadInput | undefined;
    connectOrCreate?: ThreadsOnPremiseCreateOrConnectWithoutThreadInput | undefined;
    connect?: ThreadsOnPremiseWhereUniqueInput | undefined;
}
