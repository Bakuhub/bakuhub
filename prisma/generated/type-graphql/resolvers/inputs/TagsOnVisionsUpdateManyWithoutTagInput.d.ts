import { TagsOnVisionsCreateManyTagInputEnvelope } from "../inputs/TagsOnVisionsCreateManyTagInputEnvelope";
import { TagsOnVisionsCreateOrConnectWithoutTagInput } from "../inputs/TagsOnVisionsCreateOrConnectWithoutTagInput";
import { TagsOnVisionsCreateWithoutTagInput } from "../inputs/TagsOnVisionsCreateWithoutTagInput";
import { TagsOnVisionsScalarWhereInput } from "../inputs/TagsOnVisionsScalarWhereInput";
import { TagsOnVisionsUpdateManyWithWhereWithoutTagInput } from "../inputs/TagsOnVisionsUpdateManyWithWhereWithoutTagInput";
import { TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput";
import { TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput";
import { TagsOnVisionsWhereUniqueInput } from "../inputs/TagsOnVisionsWhereUniqueInput";
export declare class TagsOnVisionsUpdateManyWithoutTagInput {
    create?: TagsOnVisionsCreateWithoutTagInput[] | undefined;
    connectOrCreate?: TagsOnVisionsCreateOrConnectWithoutTagInput[] | undefined;
    upsert?: TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput[] | undefined;
    createMany?: TagsOnVisionsCreateManyTagInputEnvelope | undefined;
    set?: TagsOnVisionsWhereUniqueInput[] | undefined;
    disconnect?: TagsOnVisionsWhereUniqueInput[] | undefined;
    delete?: TagsOnVisionsWhereUniqueInput[] | undefined;
    connect?: TagsOnVisionsWhereUniqueInput[] | undefined;
    update?: TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput[] | undefined;
    updateMany?: TagsOnVisionsUpdateManyWithWhereWithoutTagInput[] | undefined;
    deleteMany?: TagsOnVisionsScalarWhereInput[] | undefined;
}
