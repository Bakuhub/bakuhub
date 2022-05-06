import { VotesOnThreadCreateManyThreadInputEnvelope } from "../inputs/VotesOnThreadCreateManyThreadInputEnvelope";
import { VotesOnThreadCreateOrConnectWithoutThreadInput } from "../inputs/VotesOnThreadCreateOrConnectWithoutThreadInput";
import { VotesOnThreadCreateWithoutThreadInput } from "../inputs/VotesOnThreadCreateWithoutThreadInput";
import { VotesOnThreadScalarWhereInput } from "../inputs/VotesOnThreadScalarWhereInput";
import { VotesOnThreadUpdateManyWithWhereWithoutThreadInput } from "../inputs/VotesOnThreadUpdateManyWithWhereWithoutThreadInput";
import { VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput } from "../inputs/VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput";
import { VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput } from "../inputs/VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";
export declare class VotesOnThreadUpdateManyWithoutThreadInput {
    create?: VotesOnThreadCreateWithoutThreadInput[] | undefined;
    connectOrCreate?: VotesOnThreadCreateOrConnectWithoutThreadInput[] | undefined;
    upsert?: VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput[] | undefined;
    createMany?: VotesOnThreadCreateManyThreadInputEnvelope | undefined;
    set?: VotesOnThreadWhereUniqueInput[] | undefined;
    disconnect?: VotesOnThreadWhereUniqueInput[] | undefined;
    delete?: VotesOnThreadWhereUniqueInput[] | undefined;
    connect?: VotesOnThreadWhereUniqueInput[] | undefined;
    update?: VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput[] | undefined;
    updateMany?: VotesOnThreadUpdateManyWithWhereWithoutThreadInput[] | undefined;
    deleteMany?: VotesOnThreadScalarWhereInput[] | undefined;
}
