import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesUpdateWithoutPremiseInput} from "./PremisesOnTimelinesUpdateWithoutPremiseInput";
import {PremisesOnTimelinesWhereUniqueInput} from "./PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput", {
    isAbstract: true
})
export class PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput {
    @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    })
    where!: PremisesOnTimelinesWhereUniqueInput;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateWithoutPremiseInput, {
        nullable: false
    })
    data!: PremisesOnTimelinesUpdateWithoutPremiseInput;
}
