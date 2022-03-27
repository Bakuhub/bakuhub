import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnPremisesCreateManyTagInput} from "./TagsOnPremisesCreateManyTagInput";

@TypeGraphQL.InputType("TagsOnPremisesCreateManyTagInputEnvelope", {
    isAbstract: true
})
export class TagsOnPremisesCreateManyTagInputEnvelope {
    @TypeGraphQL.Field(_type => [TagsOnPremisesCreateManyTagInput], {
        nullable: false
    })
    data!: TagsOnPremisesCreateManyTagInput[];

    @TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
    skipDuplicates?: boolean | undefined;
}
