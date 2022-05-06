import { ReactionOnThreadsCreateManyThreadInputEnvelope } from "../inputs/ReactionOnThreadsCreateManyThreadInputEnvelope";
import { ReactionOnThreadsCreateOrConnectWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateOrConnectWithoutThreadInput";
import { ReactionOnThreadsCreateWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateWithoutThreadInput";
import { ReactionOnThreadsScalarWhereInput } from "../inputs/ReactionOnThreadsScalarWhereInput";
import { ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput } from "../inputs/ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput";
import { ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput } from "../inputs/ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput";
import { ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput } from "../inputs/ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";
export declare class ReactionOnThreadsUpdateManyWithoutThreadInput {
    create?: ReactionOnThreadsCreateWithoutThreadInput[] | undefined;
    connectOrCreate?: ReactionOnThreadsCreateOrConnectWithoutThreadInput[] | undefined;
    upsert?: ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput[] | undefined;
    createMany?: ReactionOnThreadsCreateManyThreadInputEnvelope | undefined;
    set?: ReactionOnThreadsWhereUniqueInput[] | undefined;
    disconnect?: ReactionOnThreadsWhereUniqueInput[] | undefined;
    delete?: ReactionOnThreadsWhereUniqueInput[] | undefined;
    connect?: ReactionOnThreadsWhereUniqueInput[] | undefined;
    update?: ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput[] | undefined;
    updateMany?: ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput[] | undefined;
    deleteMany?: ReactionOnThreadsScalarWhereInput[] | undefined;
}
