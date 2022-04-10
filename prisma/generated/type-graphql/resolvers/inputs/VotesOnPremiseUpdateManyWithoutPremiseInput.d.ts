import { VotesOnPremiseCreateManyPremiseInputEnvelope } from "../inputs/VotesOnPremiseCreateManyPremiseInputEnvelope";
import { VotesOnPremiseCreateOrConnectWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateOrConnectWithoutPremiseInput";
import { VotesOnPremiseCreateWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateWithoutPremiseInput";
import { VotesOnPremiseScalarWhereInput } from "../inputs/VotesOnPremiseScalarWhereInput";
import { VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput } from "../inputs/VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput";
import { VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput";
import { VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";
export declare class VotesOnPremiseUpdateManyWithoutPremiseInput {
    create?: VotesOnPremiseCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: VotesOnPremiseCreateOrConnectWithoutPremiseInput[] | undefined;
    upsert?: VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;
    createMany?: VotesOnPremiseCreateManyPremiseInputEnvelope | undefined;
    set?: VotesOnPremiseWhereUniqueInput[] | undefined;
    disconnect?: VotesOnPremiseWhereUniqueInput[] | undefined;
    delete?: VotesOnPremiseWhereUniqueInput[] | undefined;
    connect?: VotesOnPremiseWhereUniqueInput[] | undefined;
    update?: VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;
    updateMany?: VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput[] | undefined;
    deleteMany?: VotesOnPremiseScalarWhereInput[] | undefined;
}
