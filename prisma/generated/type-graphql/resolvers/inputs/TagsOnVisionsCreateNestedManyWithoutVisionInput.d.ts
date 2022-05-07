import { TagsOnVisionsCreateManyVisionInputEnvelope } from "../inputs/TagsOnVisionsCreateManyVisionInputEnvelope";
import { TagsOnVisionsCreateOrConnectWithoutVisionInput } from "../inputs/TagsOnVisionsCreateOrConnectWithoutVisionInput";
import { TagsOnVisionsCreateWithoutVisionInput } from "../inputs/TagsOnVisionsCreateWithoutVisionInput";
import { TagsOnVisionsWhereUniqueInput } from "../inputs/TagsOnVisionsWhereUniqueInput";
export declare class TagsOnVisionsCreateNestedManyWithoutVisionInput {
    create?: TagsOnVisionsCreateWithoutVisionInput[] | undefined;
    connectOrCreate?: TagsOnVisionsCreateOrConnectWithoutVisionInput[] | undefined;
    createMany?: TagsOnVisionsCreateManyVisionInputEnvelope | undefined;
    connect?: TagsOnVisionsWhereUniqueInput[] | undefined;
}
