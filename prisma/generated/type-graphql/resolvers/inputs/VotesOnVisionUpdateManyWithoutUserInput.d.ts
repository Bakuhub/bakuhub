import { VotesOnVisionCreateManyUserInputEnvelope } from "../inputs/VotesOnVisionCreateManyUserInputEnvelope";
import { VotesOnVisionCreateOrConnectWithoutUserInput } from "../inputs/VotesOnVisionCreateOrConnectWithoutUserInput";
import { VotesOnVisionCreateWithoutUserInput } from "../inputs/VotesOnVisionCreateWithoutUserInput";
import { VotesOnVisionScalarWhereInput } from "../inputs/VotesOnVisionScalarWhereInput";
import { VotesOnVisionUpdateManyWithWhereWithoutUserInput } from "../inputs/VotesOnVisionUpdateManyWithWhereWithoutUserInput";
import { VotesOnVisionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnVisionUpdateWithWhereUniqueWithoutUserInput";
import { VotesOnVisionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnVisionUpsertWithWhereUniqueWithoutUserInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";
export declare class VotesOnVisionUpdateManyWithoutUserInput {
    create?: VotesOnVisionCreateWithoutUserInput[] | undefined;
    connectOrCreate?: VotesOnVisionCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: VotesOnVisionUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: VotesOnVisionCreateManyUserInputEnvelope | undefined;
    set?: VotesOnVisionWhereUniqueInput[] | undefined;
    disconnect?: VotesOnVisionWhereUniqueInput[] | undefined;
    delete?: VotesOnVisionWhereUniqueInput[] | undefined;
    connect?: VotesOnVisionWhereUniqueInput[] | undefined;
    update?: VotesOnVisionUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: VotesOnVisionUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: VotesOnVisionScalarWhereInput[] | undefined;
}
