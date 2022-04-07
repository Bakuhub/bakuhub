import { ReactionOnVisionsCreateManyVisionInputEnvelope } from "../inputs/ReactionOnVisionsCreateManyVisionInputEnvelope";
import { ReactionOnVisionsCreateOrConnectWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateOrConnectWithoutVisionInput";
import { ReactionOnVisionsCreateWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateWithoutVisionInput";
import { ReactionOnVisionsScalarWhereInput } from "../inputs/ReactionOnVisionsScalarWhereInput";
import { ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput } from "../inputs/ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput";
import { ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput } from "../inputs/ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput";
import { ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput } from "../inputs/ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";
export declare class ReactionOnVisionsUpdateManyWithoutVisionInput {
    create?: ReactionOnVisionsCreateWithoutVisionInput[] | undefined;
    connectOrCreate?: ReactionOnVisionsCreateOrConnectWithoutVisionInput[] | undefined;
    upsert?: ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput[] | undefined;
    createMany?: ReactionOnVisionsCreateManyVisionInputEnvelope | undefined;
    set?: ReactionOnVisionsWhereUniqueInput[] | undefined;
    disconnect?: ReactionOnVisionsWhereUniqueInput[] | undefined;
    delete?: ReactionOnVisionsWhereUniqueInput[] | undefined;
    connect?: ReactionOnVisionsWhereUniqueInput[] | undefined;
    update?: ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput[] | undefined;
    updateMany?: ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput[] | undefined;
    deleteMany?: ReactionOnVisionsScalarWhereInput[] | undefined;
}
