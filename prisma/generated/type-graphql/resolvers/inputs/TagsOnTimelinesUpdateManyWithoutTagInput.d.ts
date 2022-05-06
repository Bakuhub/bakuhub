import { TagsOnTimelinesCreateManyTagInputEnvelope } from "../inputs/TagsOnTimelinesCreateManyTagInputEnvelope";
import { TagsOnTimelinesCreateOrConnectWithoutTagInput } from "../inputs/TagsOnTimelinesCreateOrConnectWithoutTagInput";
import { TagsOnTimelinesCreateWithoutTagInput } from "../inputs/TagsOnTimelinesCreateWithoutTagInput";
import { TagsOnTimelinesScalarWhereInput } from "../inputs/TagsOnTimelinesScalarWhereInput";
import { TagsOnTimelinesUpdateManyWithWhereWithoutTagInput } from "../inputs/TagsOnTimelinesUpdateManyWithWhereWithoutTagInput";
import { TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput";
import { TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";
export declare class TagsOnTimelinesUpdateManyWithoutTagInput {
    create?: TagsOnTimelinesCreateWithoutTagInput[] | undefined;
    connectOrCreate?: TagsOnTimelinesCreateOrConnectWithoutTagInput[] | undefined;
    upsert?: TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput[] | undefined;
    createMany?: TagsOnTimelinesCreateManyTagInputEnvelope | undefined;
    set?: TagsOnTimelinesWhereUniqueInput[] | undefined;
    disconnect?: TagsOnTimelinesWhereUniqueInput[] | undefined;
    delete?: TagsOnTimelinesWhereUniqueInput[] | undefined;
    connect?: TagsOnTimelinesWhereUniqueInput[] | undefined;
    update?: TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput[] | undefined;
    updateMany?: TagsOnTimelinesUpdateManyWithWhereWithoutTagInput[] | undefined;
    deleteMany?: TagsOnTimelinesScalarWhereInput[] | undefined;
}
