import { VotesOnPremiseCreateManyPremiseInputEnvelope } from "../inputs/VotesOnPremiseCreateManyPremiseInputEnvelope";
import { VotesOnPremiseCreateOrConnectWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateOrConnectWithoutPremiseInput";
import { VotesOnPremiseCreateWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateWithoutPremiseInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";
export declare class VotesOnPremiseCreateNestedManyWithoutPremiseInput {
    create?: VotesOnPremiseCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: VotesOnPremiseCreateOrConnectWithoutPremiseInput[] | undefined;
    createMany?: VotesOnPremiseCreateManyPremiseInputEnvelope | undefined;
    connect?: VotesOnPremiseWhereUniqueInput[] | undefined;
}
