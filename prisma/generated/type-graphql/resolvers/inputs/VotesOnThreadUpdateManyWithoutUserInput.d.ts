import { VotesOnThreadCreateManyUserInputEnvelope } from "../inputs/VotesOnThreadCreateManyUserInputEnvelope";
import { VotesOnThreadCreateOrConnectWithoutUserInput } from "../inputs/VotesOnThreadCreateOrConnectWithoutUserInput";
import { VotesOnThreadCreateWithoutUserInput } from "../inputs/VotesOnThreadCreateWithoutUserInput";
import { VotesOnThreadScalarWhereInput } from "../inputs/VotesOnThreadScalarWhereInput";
import { VotesOnThreadUpdateManyWithWhereWithoutUserInput } from "../inputs/VotesOnThreadUpdateManyWithWhereWithoutUserInput";
import { VotesOnThreadUpdateWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnThreadUpdateWithWhereUniqueWithoutUserInput";
import { VotesOnThreadUpsertWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnThreadUpsertWithWhereUniqueWithoutUserInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";
export declare class VotesOnThreadUpdateManyWithoutUserInput {
    create?: VotesOnThreadCreateWithoutUserInput[] | undefined;
    connectOrCreate?: VotesOnThreadCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: VotesOnThreadUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: VotesOnThreadCreateManyUserInputEnvelope | undefined;
    set?: VotesOnThreadWhereUniqueInput[] | undefined;
    disconnect?: VotesOnThreadWhereUniqueInput[] | undefined;
    delete?: VotesOnThreadWhereUniqueInput[] | undefined;
    connect?: VotesOnThreadWhereUniqueInput[] | undefined;
    update?: VotesOnThreadUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: VotesOnThreadUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: VotesOnThreadScalarWhereInput[] | undefined;
}
