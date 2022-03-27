import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnTimelinesCreateNestedManyWithoutTagInput} from "./TagsOnTimelinesCreateNestedManyWithoutTagInput";

@TypeGraphQL.InputType("TagCreateWithoutTagsOnPremisesInput", {
    isAbstract: true
})
export class TagCreateWithoutTagsOnPremisesInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    label!: string;

    @TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTagInput, {
        nullable: true
    })
    tagsOnTimelines?: TagsOnTimelinesCreateNestedManyWithoutTagInput | undefined;
}
