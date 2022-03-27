import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnTimelinesUpdateWithoutTagInput} from "./TagsOnTimelinesUpdateWithoutTagInput";
import {TagsOnTimelinesWhereUniqueInput} from "./TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput", {
    isAbstract: true
})
export class TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput {
    @TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    })
    where!: TagsOnTimelinesWhereUniqueInput;

    @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateWithoutTagInput, {
        nullable: false
    })
    data!: TagsOnTimelinesUpdateWithoutTagInput;
}
