import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../scalars";
import {Premise} from "./Premise";
import {Tag} from "./Tag";

@TypeGraphQL.ObjectType("TagsOnPremises", {
    isAbstract: true
})
export class TagsOnPremises {
    tag?: Tag;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    })
    tagId!: number;

    premise?: Premise;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    premiseId!: string;

    @TypeGraphQL.Field(_type => Date, {
        nullable: false
    })
    assignedAt!: Date;
}
