import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesCreateWithoutPremiseInput} from "./PremisesOnTimelinesCreateWithoutPremiseInput";
import {PremisesOnTimelinesUpdateWithoutPremiseInput} from "./PremisesOnTimelinesUpdateWithoutPremiseInput";
import {PremisesOnTimelinesWhereUniqueInput} from "./PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput", {
    isAbstract: true
})
export class PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput {
    @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    })
    where!: PremisesOnTimelinesWhereUniqueInput;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateWithoutPremiseInput, {
        nullable: false
    })
    update!: PremisesOnTimelinesUpdateWithoutPremiseInput;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateWithoutPremiseInput, {
        nullable: false
    })
    create!: PremisesOnTimelinesCreateWithoutPremiseInput;
}
