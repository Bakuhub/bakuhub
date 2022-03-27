import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCountAggregate} from "./PremiseCountAggregate";
import {PremiseMaxAggregate} from "./PremiseMaxAggregate";
import {PremiseMinAggregate} from "./PremiseMinAggregate";

@TypeGraphQL.ObjectType("AggregatePremise", {
    isAbstract: true
})
export class AggregatePremise {
    @TypeGraphQL.Field(_type => PremiseCountAggregate, {
        nullable: true
    })
    _count!: PremiseCountAggregate | null;

    @TypeGraphQL.Field(_type => PremiseMinAggregate, {
        nullable: true
    })
    _min!: PremiseMinAggregate | null;

    @TypeGraphQL.Field(_type => PremiseMaxAggregate, {
        nullable: true
    })
    _max!: PremiseMaxAggregate | null;
}
