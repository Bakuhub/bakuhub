import { ReactionOnVisionsCreateManyUserInputEnvelope } from "../inputs/ReactionOnVisionsCreateManyUserInputEnvelope";
import { ReactionOnVisionsCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnVisionsCreateOrConnectWithoutUserInput";
import { ReactionOnVisionsCreateWithoutUserInput } from "../inputs/ReactionOnVisionsCreateWithoutUserInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";
export declare class ReactionOnVisionsCreateNestedManyWithoutUserInput {
    create?: ReactionOnVisionsCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ReactionOnVisionsCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: ReactionOnVisionsCreateManyUserInputEnvelope | undefined;
    connect?: ReactionOnVisionsWhereUniqueInput[] | undefined;
}
