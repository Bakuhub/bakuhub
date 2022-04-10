import { VotesOnThreadCreateManyThreadInputEnvelope } from "../inputs/VotesOnThreadCreateManyThreadInputEnvelope";
import { VotesOnThreadCreateOrConnectWithoutThreadInput } from "../inputs/VotesOnThreadCreateOrConnectWithoutThreadInput";
import { VotesOnThreadCreateWithoutThreadInput } from "../inputs/VotesOnThreadCreateWithoutThreadInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";
export declare class VotesOnThreadCreateNestedManyWithoutThreadInput {
    create?: VotesOnThreadCreateWithoutThreadInput[] | undefined;
    connectOrCreate?: VotesOnThreadCreateOrConnectWithoutThreadInput[] | undefined;
    createMany?: VotesOnThreadCreateManyThreadInputEnvelope | undefined;
    connect?: VotesOnThreadWhereUniqueInput[] | undefined;
}
