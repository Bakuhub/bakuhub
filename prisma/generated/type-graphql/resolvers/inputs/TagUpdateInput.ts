import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";
import {TagsOnPremisesUpdateManyWithoutTagInput} from "./TagsOnPremisesUpdateManyWithoutTagInput";
import {TagsOnTimelinesUpdateManyWithoutTagInput} from "./TagsOnTimelinesUpdateManyWithoutTagInput";

@TypeGraphQL.InputType("TagUpdateInput", {
    isAbstract: true
})
export class TagUpdateInput {
    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    label?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutTagInput, {
        nullable: true
    })
    tagsOnPremises?: TagsOnPremisesUpdateManyWithoutTagInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTagInput, {
        nullable: true
    })
    tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTagInput | undefined;
}
