import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesCountAggregate} from "./PremisesOnTimelinesCountAggregate";
import {PremisesOnTimelinesMaxAggregate} from "./PremisesOnTimelinesMaxAggregate";
import {PremisesOnTimelinesMinAggregate} from "./PremisesOnTimelinesMinAggregate";

@TypeGraphQL.ObjectType("AggregatePremisesOnTimelines", {
    isAbstract: true
})
export class AggregatePremisesOnTimelines {
    @TypeGraphQL.Field(_type => PremisesOnTimelinesCountAggregate, {
        nullable: true
    })
    _count!: PremisesOnTimelinesCountAggregate | null;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesMinAggregate, {
        nullable: true
    })
    _min!: PremisesOnTimelinesMinAggregate | null;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesMaxAggregate, {
        nullable: true
    })
    _max!: PremisesOnTimelinesMaxAggregate | null;
}
