import { VotesOnPremiseCreateManyUserInputEnvelope } from "../inputs/VotesOnPremiseCreateManyUserInputEnvelope";
import { VotesOnPremiseCreateOrConnectWithoutUserInput } from "../inputs/VotesOnPremiseCreateOrConnectWithoutUserInput";
import { VotesOnPremiseCreateWithoutUserInput } from "../inputs/VotesOnPremiseCreateWithoutUserInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";
export declare class VotesOnPremiseCreateNestedManyWithoutUserInput {
    create?: VotesOnPremiseCreateWithoutUserInput[] | undefined;
    connectOrCreate?: VotesOnPremiseCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: VotesOnPremiseCreateManyUserInputEnvelope | undefined;
    connect?: VotesOnPremiseWhereUniqueInput[] | undefined;
}
