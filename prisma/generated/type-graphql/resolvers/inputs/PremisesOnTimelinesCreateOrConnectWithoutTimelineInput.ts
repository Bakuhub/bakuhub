import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesCreateWithoutTimelineInput} from "./PremisesOnTimelinesCreateWithoutTimelineInput";
import {PremisesOnTimelinesWhereUniqueInput} from "./PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateOrConnectWithoutTimelineInput", {
    isAbstract: true
})
export class PremisesOnTimelinesCreateOrConnectWithoutTimelineInput {
    @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    })
    where!: PremisesOnTimelinesWhereUniqueInput;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    })
    create!: PremisesOnTimelinesCreateWithoutTimelineInput;
}
