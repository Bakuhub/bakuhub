import { VotesOnVisionCreateManyVisionInputEnvelope } from "../inputs/VotesOnVisionCreateManyVisionInputEnvelope";
import { VotesOnVisionCreateOrConnectWithoutVisionInput } from "../inputs/VotesOnVisionCreateOrConnectWithoutVisionInput";
import { VotesOnVisionCreateWithoutVisionInput } from "../inputs/VotesOnVisionCreateWithoutVisionInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";
export declare class VotesOnVisionCreateNestedManyWithoutVisionInput {
    create?: VotesOnVisionCreateWithoutVisionInput[] | undefined;
    connectOrCreate?: VotesOnVisionCreateOrConnectWithoutVisionInput[] | undefined;
    createMany?: VotesOnVisionCreateManyVisionInputEnvelope | undefined;
    connect?: VotesOnVisionWhereUniqueInput[] | undefined;
}
