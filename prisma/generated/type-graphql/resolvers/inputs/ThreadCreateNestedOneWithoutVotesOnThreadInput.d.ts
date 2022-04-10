import { ThreadCreateOrConnectWithoutVotesOnThreadInput } from "../inputs/ThreadCreateOrConnectWithoutVotesOnThreadInput";
import { ThreadCreateWithoutVotesOnThreadInput } from "../inputs/ThreadCreateWithoutVotesOnThreadInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadCreateNestedOneWithoutVotesOnThreadInput {
    create?: ThreadCreateWithoutVotesOnThreadInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutVotesOnThreadInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
}
