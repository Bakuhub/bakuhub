import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagCreateNestedOneWithoutTagsOnTimelinesInput} from "./TagCreateNestedOneWithoutTagsOnTimelinesInput";
import {TimelineCreateNestedOneWithoutTagsOnTimelinesInput} from "./TimelineCreateNestedOneWithoutTagsOnTimelinesInput";

@TypeGraphQL.InputType("TagsOnTimelinesCreateInput", {
    isAbstract: true
})
export class TagsOnTimelinesCreateInput {
    @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTagsOnTimelinesInput, {
        nullable: false
    })
    tag!: TagCreateNestedOneWithoutTagsOnTimelinesInput;

    @TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutTagsOnTimelinesInput, {
        nullable: false
    })
    timeline!: TimelineCreateNestedOneWithoutTagsOnTimelinesInput;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    assignedAt?: Date | undefined;
}
