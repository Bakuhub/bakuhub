import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesWhereInput} from "./PremisesOnTimelinesWhereInput";

@TypeGraphQL.InputType("PremisesOnTimelinesListRelationFilter", {
    isAbstract: true
})
export class PremisesOnTimelinesListRelationFilter {
    @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput, {
        nullable: true
    })
    every?: PremisesOnTimelinesWhereInput | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput, {
        nullable: true
    })
    some?: PremisesOnTimelinesWhereInput | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput, {
        nullable: true
    })
    none?: PremisesOnTimelinesWhereInput | undefined;
}
