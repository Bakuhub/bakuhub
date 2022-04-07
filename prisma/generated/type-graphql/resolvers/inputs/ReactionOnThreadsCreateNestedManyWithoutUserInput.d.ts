import { ReactionOnThreadsCreateManyUserInputEnvelope } from "../inputs/ReactionOnThreadsCreateManyUserInputEnvelope";
import { ReactionOnThreadsCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnThreadsCreateOrConnectWithoutUserInput";
import { ReactionOnThreadsCreateWithoutUserInput } from "../inputs/ReactionOnThreadsCreateWithoutUserInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";
export declare class ReactionOnThreadsCreateNestedManyWithoutUserInput {
    create?: ReactionOnThreadsCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ReactionOnThreadsCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: ReactionOnThreadsCreateManyUserInputEnvelope | undefined;
    connect?: ReactionOnThreadsWhereUniqueInput[] | undefined;
}
