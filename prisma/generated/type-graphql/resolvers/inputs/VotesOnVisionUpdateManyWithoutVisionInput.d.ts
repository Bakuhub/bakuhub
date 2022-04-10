import { VotesOnVisionCreateManyVisionInputEnvelope } from "../inputs/VotesOnVisionCreateManyVisionInputEnvelope";
import { VotesOnVisionCreateOrConnectWithoutVisionInput } from "../inputs/VotesOnVisionCreateOrConnectWithoutVisionInput";
import { VotesOnVisionCreateWithoutVisionInput } from "../inputs/VotesOnVisionCreateWithoutVisionInput";
import { VotesOnVisionScalarWhereInput } from "../inputs/VotesOnVisionScalarWhereInput";
import { VotesOnVisionUpdateManyWithWhereWithoutVisionInput } from "../inputs/VotesOnVisionUpdateManyWithWhereWithoutVisionInput";
import { VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput } from "../inputs/VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput";
import { VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput } from "../inputs/VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";
export declare class VotesOnVisionUpdateManyWithoutVisionInput {
    create?: VotesOnVisionCreateWithoutVisionInput[] | undefined;
    connectOrCreate?: VotesOnVisionCreateOrConnectWithoutVisionInput[] | undefined;
    upsert?: VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput[] | undefined;
    createMany?: VotesOnVisionCreateManyVisionInputEnvelope | undefined;
    set?: VotesOnVisionWhereUniqueInput[] | undefined;
    disconnect?: VotesOnVisionWhereUniqueInput[] | undefined;
    delete?: VotesOnVisionWhereUniqueInput[] | undefined;
    connect?: VotesOnVisionWhereUniqueInput[] | undefined;
    update?: VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput[] | undefined;
    updateMany?: VotesOnVisionUpdateManyWithWhereWithoutVisionInput[] | undefined;
    deleteMany?: VotesOnVisionScalarWhereInput[] | undefined;
}
