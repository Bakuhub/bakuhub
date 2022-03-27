import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput} from "./PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesWhereUniqueInput", {
    isAbstract: true
})
export class PremisesOnTimelinesWhereUniqueInput {
    @TypeGraphQL.Field(_type => PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput, {
        nullable: true
    })
    premiseId_timelineId?: PremisesOnTimelinesPremiseIdTimelineIdCompoundUniqueInput | undefined;
}
