import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnPremisesCreateManyPremiseInput} from "./TagsOnPremisesCreateManyPremiseInput";

@TypeGraphQL.InputType("TagsOnPremisesCreateManyPremiseInputEnvelope", {
    isAbstract: true
})
export class TagsOnPremisesCreateManyPremiseInputEnvelope {
    @TypeGraphQL.Field(_type => [TagsOnPremisesCreateManyPremiseInput], {
        nullable: false
    })
    data!: TagsOnPremisesCreateManyPremiseInput[];

    @TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
    skipDuplicates?: boolean | undefined;
}
