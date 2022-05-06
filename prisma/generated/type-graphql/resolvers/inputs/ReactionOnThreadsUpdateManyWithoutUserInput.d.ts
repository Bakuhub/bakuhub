import { ReactionOnThreadsCreateManyUserInputEnvelope } from "../inputs/ReactionOnThreadsCreateManyUserInputEnvelope";
import { ReactionOnThreadsCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnThreadsCreateOrConnectWithoutUserInput";
import { ReactionOnThreadsCreateWithoutUserInput } from "../inputs/ReactionOnThreadsCreateWithoutUserInput";
import { ReactionOnThreadsScalarWhereInput } from "../inputs/ReactionOnThreadsScalarWhereInput";
import { ReactionOnThreadsUpdateManyWithWhereWithoutUserInput } from "../inputs/ReactionOnThreadsUpdateManyWithWhereWithoutUserInput";
import { ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput";
import { ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";
export declare class ReactionOnThreadsUpdateManyWithoutUserInput {
    create?: ReactionOnThreadsCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ReactionOnThreadsCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: ReactionOnThreadsCreateManyUserInputEnvelope | undefined;
    set?: ReactionOnThreadsWhereUniqueInput[] | undefined;
    disconnect?: ReactionOnThreadsWhereUniqueInput[] | undefined;
    delete?: ReactionOnThreadsWhereUniqueInput[] | undefined;
    connect?: ReactionOnThreadsWhereUniqueInput[] | undefined;
    update?: ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: ReactionOnThreadsUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: ReactionOnThreadsScalarWhereInput[] | undefined;
}
