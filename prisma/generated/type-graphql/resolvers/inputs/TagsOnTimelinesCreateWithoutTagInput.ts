import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineCreateNestedOneWithoutTagsOnTimelinesInput} from "./TimelineCreateNestedOneWithoutTagsOnTimelinesInput";

@TypeGraphQL.InputType("TagsOnTimelinesCreateWithoutTagInput", {
    isAbstract: true
})
export class TagsOnTimelinesCreateWithoutTagInput {
    @TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutTagsOnTimelinesInput, {
        nullable: false
    })
    timeline!: TimelineCreateNestedOneWithoutTagsOnTimelinesInput;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    assignedAt?: Date | undefined;
}
