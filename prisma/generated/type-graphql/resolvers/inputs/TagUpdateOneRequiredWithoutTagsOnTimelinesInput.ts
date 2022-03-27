import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagCreateOrConnectWithoutTagsOnTimelinesInput} from "./TagCreateOrConnectWithoutTagsOnTimelinesInput";
import {TagCreateWithoutTagsOnTimelinesInput} from "./TagCreateWithoutTagsOnTimelinesInput";
import {TagUpdateWithoutTagsOnTimelinesInput} from "./TagUpdateWithoutTagsOnTimelinesInput";
import {TagUpsertWithoutTagsOnTimelinesInput} from "./TagUpsertWithoutTagsOnTimelinesInput";
import {TagWhereUniqueInput} from "./TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateOneRequiredWithoutTagsOnTimelinesInput", {
    isAbstract: true
})
export class TagUpdateOneRequiredWithoutTagsOnTimelinesInput {
    @TypeGraphQL.Field(_type => TagCreateWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    create?: TagCreateWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TagUpsertWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    upsert?: TagUpsertWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
        nullable: true
    })
    connect?: TagWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => TagUpdateWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    update?: TagUpdateWithoutTagsOnTimelinesInput | undefined;
}
