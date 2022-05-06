import { VotesOnVisionCreateManyUserInputEnvelope } from "../inputs/VotesOnVisionCreateManyUserInputEnvelope";
import { VotesOnVisionCreateOrConnectWithoutUserInput } from "../inputs/VotesOnVisionCreateOrConnectWithoutUserInput";
import { VotesOnVisionCreateWithoutUserInput } from "../inputs/VotesOnVisionCreateWithoutUserInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";
export declare class VotesOnVisionCreateNestedManyWithoutUserInput {
    create?: VotesOnVisionCreateWithoutUserInput[] | undefined;
    connectOrCreate?: VotesOnVisionCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: VotesOnVisionCreateManyUserInputEnvelope | undefined;
    connect?: VotesOnVisionWhereUniqueInput[] | undefined;
}
