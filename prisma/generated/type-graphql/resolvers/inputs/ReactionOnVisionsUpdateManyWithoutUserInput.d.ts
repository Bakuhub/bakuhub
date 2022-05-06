import { ReactionOnVisionsCreateManyUserInputEnvelope } from "../inputs/ReactionOnVisionsCreateManyUserInputEnvelope";
import { ReactionOnVisionsCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnVisionsCreateOrConnectWithoutUserInput";
import { ReactionOnVisionsCreateWithoutUserInput } from "../inputs/ReactionOnVisionsCreateWithoutUserInput";
import { ReactionOnVisionsScalarWhereInput } from "../inputs/ReactionOnVisionsScalarWhereInput";
import { ReactionOnVisionsUpdateManyWithWhereWithoutUserInput } from "../inputs/ReactionOnVisionsUpdateManyWithWhereWithoutUserInput";
import { ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput";
import { ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";
export declare class ReactionOnVisionsUpdateManyWithoutUserInput {
    create?: ReactionOnVisionsCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ReactionOnVisionsCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: ReactionOnVisionsCreateManyUserInputEnvelope | undefined;
    set?: ReactionOnVisionsWhereUniqueInput[] | undefined;
    disconnect?: ReactionOnVisionsWhereUniqueInput[] | undefined;
    delete?: ReactionOnVisionsWhereUniqueInput[] | undefined;
    connect?: ReactionOnVisionsWhereUniqueInput[] | undefined;
    update?: ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: ReactionOnVisionsUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: ReactionOnVisionsScalarWhereInput[] | undefined;
}
