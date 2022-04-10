import { VotesOnPremiseCreateManyUserInputEnvelope } from "../inputs/VotesOnPremiseCreateManyUserInputEnvelope";
import { VotesOnPremiseCreateOrConnectWithoutUserInput } from "../inputs/VotesOnPremiseCreateOrConnectWithoutUserInput";
import { VotesOnPremiseCreateWithoutUserInput } from "../inputs/VotesOnPremiseCreateWithoutUserInput";
import { VotesOnPremiseScalarWhereInput } from "../inputs/VotesOnPremiseScalarWhereInput";
import { VotesOnPremiseUpdateManyWithWhereWithoutUserInput } from "../inputs/VotesOnPremiseUpdateManyWithWhereWithoutUserInput";
import { VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput";
import { VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";
export declare class VotesOnPremiseUpdateManyWithoutUserInput {
    create?: VotesOnPremiseCreateWithoutUserInput[] | undefined;
    connectOrCreate?: VotesOnPremiseCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: VotesOnPremiseCreateManyUserInputEnvelope | undefined;
    set?: VotesOnPremiseWhereUniqueInput[] | undefined;
    disconnect?: VotesOnPremiseWhereUniqueInput[] | undefined;
    delete?: VotesOnPremiseWhereUniqueInput[] | undefined;
    connect?: VotesOnPremiseWhereUniqueInput[] | undefined;
    update?: VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: VotesOnPremiseUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: VotesOnPremiseScalarWhereInput[] | undefined;
}
