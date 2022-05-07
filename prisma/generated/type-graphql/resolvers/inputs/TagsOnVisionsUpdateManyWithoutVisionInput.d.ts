import { TagsOnVisionsCreateManyVisionInputEnvelope } from "../inputs/TagsOnVisionsCreateManyVisionInputEnvelope";
import { TagsOnVisionsCreateOrConnectWithoutVisionInput } from "../inputs/TagsOnVisionsCreateOrConnectWithoutVisionInput";
import { TagsOnVisionsCreateWithoutVisionInput } from "../inputs/TagsOnVisionsCreateWithoutVisionInput";
import { TagsOnVisionsScalarWhereInput } from "../inputs/TagsOnVisionsScalarWhereInput";
import { TagsOnVisionsUpdateManyWithWhereWithoutVisionInput } from "../inputs/TagsOnVisionsUpdateManyWithWhereWithoutVisionInput";
import { TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput } from "../inputs/TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput";
import { TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput } from "../inputs/TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput";
import { TagsOnVisionsWhereUniqueInput } from "../inputs/TagsOnVisionsWhereUniqueInput";
export declare class TagsOnVisionsUpdateManyWithoutVisionInput {
    create?: TagsOnVisionsCreateWithoutVisionInput[] | undefined;
    connectOrCreate?: TagsOnVisionsCreateOrConnectWithoutVisionInput[] | undefined;
    upsert?: TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput[] | undefined;
    createMany?: TagsOnVisionsCreateManyVisionInputEnvelope | undefined;
    set?: TagsOnVisionsWhereUniqueInput[] | undefined;
    disconnect?: TagsOnVisionsWhereUniqueInput[] | undefined;
    delete?: TagsOnVisionsWhereUniqueInput[] | undefined;
    connect?: TagsOnVisionsWhereUniqueInput[] | undefined;
    update?: TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput[] | undefined;
    updateMany?: TagsOnVisionsUpdateManyWithWhereWithoutVisionInput[] | undefined;
    deleteMany?: TagsOnVisionsScalarWhereInput[] | undefined;
}
