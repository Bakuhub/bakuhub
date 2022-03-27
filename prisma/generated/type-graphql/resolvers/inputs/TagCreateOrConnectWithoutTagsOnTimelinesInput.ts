import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagCreateWithoutTagsOnTimelinesInput} from "./TagCreateWithoutTagsOnTimelinesInput";
import {TagWhereUniqueInput} from "./TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateOrConnectWithoutTagsOnTimelinesInput", {
    isAbstract: true
})
export class TagCreateOrConnectWithoutTagsOnTimelinesInput {
    @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
        nullable: false
    })
    where!: TagWhereUniqueInput;

    @TypeGraphQL.Field(_type => TagCreateWithoutTagsOnTimelinesInput, {
        nullable: false
    })
    create!: TagCreateWithoutTagsOnTimelinesInput;
}
