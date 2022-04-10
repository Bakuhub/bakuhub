import { VotesOnThreadCreateManyUserInputEnvelope } from "../inputs/VotesOnThreadCreateManyUserInputEnvelope";
import { VotesOnThreadCreateOrConnectWithoutUserInput } from "../inputs/VotesOnThreadCreateOrConnectWithoutUserInput";
import { VotesOnThreadCreateWithoutUserInput } from "../inputs/VotesOnThreadCreateWithoutUserInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";
export declare class VotesOnThreadCreateNestedManyWithoutUserInput {
    create?: VotesOnThreadCreateWithoutUserInput[] | undefined;
    connectOrCreate?: VotesOnThreadCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: VotesOnThreadCreateManyUserInputEnvelope | undefined;
    connect?: VotesOnThreadWhereUniqueInput[] | undefined;
}
